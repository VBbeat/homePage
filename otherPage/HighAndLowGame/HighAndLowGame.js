// 各変数の設定
currentChoice = 0;
const CHOICE_NO = 0;
const CHOICE_HIGH = 1;
const CHOICE_LOW = 2;
const CHOICE_EQUAL = 3;
const CHOICE_STRING_LIST = [
    "　　",
    "ハイ",
    "ロー",
    "イコール"
];

const GAMERESULT_WIN = 1;
const GAMERESULT_LOSE = 2;
const GAMERESULT_EQUAL = 3;

currentChain = 0;
maxChain = 0;
currentWin = 0;
currentBattleNum = 0;
currentRatio = 2;
currentCoin = 100;
currentNumber = "";
newNumber = "";

betCoinNum = 0;
betCoinMin = 1;
betCoinMax = 100;
const CAN_REFUND_WIN_NUM = 3;

cardPool = [];
const EACH_CARD_NUM = 4;
const MAX_CARD_VALUE = 10;
cardTotal = EACH_CARD_NUM * MAX_CARD_VALUE;
currentNumber = -1;

battleResult = 0;
gameOverFlg = false;
gameClearFlg = false;
restartGameFlg = false;

const MAX_COIN_NUM = 100000000;

// 最終ステータスパラメータ
finalStateParam = {
    "maxChain": 0,    // 最大連勝数
    "WinNum": 0,    // 合計勝利数
    "battleNum": 0,    // 最終勝負数
    "totalCoinNum": 0,    // 最終持ちコイン枚数
    "coinGetRate": 0     // コイン獲得率
};

// 変数の初期化を行う
initAll();

// 勝敗決定後にダイアログを表示する
var observer = new MutationObserver(showResult);
const obsElm = document.getElementById("currentBattleNum");
const obsConfig = {
    childList: true,
    characterData: true
};

observer.observe(obsElm, obsConfig);


/**
 * すべての変数の初期化
 */
function initAll() {
    currentChoice = "";
    currentChain = 0;
    currentWin = 0;
    currentBattleNum = 0;
    currentRatio = 2;
    currentCoin = 100;
    currentNumber = -1;
    betCoinNum = 0;
    battleResult = 0;
    gameOverFlg = false;
    gameClearFlg = false;

    // カードプールの初期化
    initcardPool();

    // 各値の更新を行う
    setValue("currentNumber", "");
    setValue("currentChain", currentChain + "連勝");
    setValue("currentWin", currentWin + "勝");
    setValue("currentBattleNum", currentBattleNum + "回");
    setValue("currentCoin", currentCoin + "枚");
    setChoice(CHOICE_NO);

    setValue("cardTotal", cardTotal + "枚");

}

/**
 * カードプールの初期化
 */
function initcardPool() {
    for (var number = 0; number < MAX_CARD_VALUE; number++) {
        cardPool[number] = EACH_CARD_NUM;
    }
    cardTotal = EACH_CARD_NUM * MAX_CARD_VALUE;
}

/**
 * 各変数の設定
 * @param id id
 * @param value セットする値
 */
function setValue(id, value) {
    var element = document.getElementById(id);
    element.innerHTML = value;
}

/**
 * ハイかローを選択する
 * @param choiceNum 1:ハイ 2:ロー, 3:イコール 
 */
function setChoice(choiceNum) {

    if (showGameOver() != 1) {
        // ゲームオーバーまたはゲームクリアの場合、何もせず終了する
        return;
    }

    currentChoice = choiceNum;
    setValue("choice", CHOICE_STRING_LIST[choiceNum]);
}

/**
 * カードをめくる
 * @returns [0-9] 正常
 * @returns -1 残りカード0枚
 */
function setNewCard() {
    if (cardTotal == 0) {
        // カードが残り0枚の場合
        return -1;
    }

    settableNumber = [];
    for (var i = 0; i < MAX_CARD_VALUE; i++) {
        if (cardPool[i] > 0) {
            settableNumber.push(i);
        }
    }

    newCardIndex = Math.floor(Math.random() * settableNumber.length);
    newCardNumber = settableNumber[newCardIndex];

    cardPool[newCardNumber] -= 1;
    cardTotal -= 1;

    setValue("cardTotal", cardTotal + "枚");

    return newCardNumber;
}

/**
 * コインをかける
 * 
 */

function betCoin() {

    if (showGameOver() != 1) {
        // ゲームオーバーまたはゲームクリアの場合、何もせず終了する
        return;
    }

    if (currentChain > 0) {
        // 勝負中にコインを賭けようとした場合
        // アラートを表示し終了する
        window.alert("勝負中なのでコインを賭けられません");
        return;
    }

    // 入力ダイアログを表示、賭けコイン枚数を入力
    betNum = window.prompt("賭けるコインの枚数を入力してください", "");
    if (isNaN(betNum)) {
        // 数字入力エラー
        window.alert("数字で入力してください");
        return;
    }
    betNum = Number(betNum);
    betCoinMax = currentCoin;
    if (betNum < betCoinMin || betNum > betCoinMax) {
        // 入力範囲エラー
        window.alert("コインの枚数は(" + betCoinMin + "-" + betCoinMax + ")で入力してください");
        return;
    }

    // 賭けコインを現在の枚数から引く
    currentCoin -= betNum;

    // 賭けコインを変数に設定する
    betCoinNum += betNum;

    // 各値の更新を行う
    setValue("currentCoin", currentCoin + "枚");
    setValue("ratio", betCoinNum + "(×" + Math.floor(currentRatio) + ")");
}

/**
 * 勝敗の判定を行う
 * @returns 0 エラー
 * @returns 1 ハイ
 * @returns 2 ロー
 * @returns 3 同じ数字
 */
function judge() {
    if (newNumber > currentNumber) {
        return CHOICE_HIGH;
    } else if (newNumber < currentNumber) {
        return CHOICE_LOW;
    } else if (newNumber == currentNumber) {
        return CHOICE_EQUAL;
    }

    return 0;
}

/**
 * 勝敗の判定をもとに、コインと倍率の処理を行う
 * @param gameResult 1: 勝ち 2: 負け
 */
function updateBetCoin(gameResult) {
    if (gameResult == GAMERESULT_WIN) {
        // 勝負に勝った場合
        betCoinNum *= currentRatio;
        currentChain += 1;
        currentRatio = currentChain + 2;

        maxChain = Math.max(currentChain, maxChain);

    } else if (gameResult == GAMERESULT_LOSE) {
        // 勝負に負けた場合
        betCoinNum = 0;
        currentRatio = 2;
        currentChain = 0;

        if (currentCoin == 0) {
            // 持ちコインの枚数が0枚の場合、ゲームオーバーとする
            gameOverFlg = true;
        }
    }
    return;
}

/**
 * 一枚目のカードをセットする
 */
function setFirstCard() {
    currentNumber = setNewCard();
    return;
}

/**
 * 勝負を行う
 * @returns 1 勝ち
 * @returns 2 負け
 * @returns 3 引き分け
 */
function runGame() {
    if (gameOverFlg || gameClearFlg) {
        window.alert("ゲームを再開します");
        gameOverFlg = false;
        gamgeClearFlg = false;
        restartGameFlg = true;
        initAll();
        return;
    }

    if (currentNumber == -1) {
        // 最初のカードをセットする
        setFirstCard();
        setValue("currentNumber", currentNumber + 1);
        return;
    }

    // 賭けコインの枚数が足りていない場合
    if (betCoinNum < betCoinMin) {
        window.alert("賭けコインの枚数が足りていません");
        return;
    }

    // ハイ,ローの選択がされていない場合
    if (currentChoice == CHOICE_NO) {
        window.alert("ハイかローを選択してください");
        return;
    }

    // カードをめくる
    newNumber = setNewCard();

    // 勝敗の判定を行う
    battleResult = judge();
    currentNumber = newNumber;
    setValue("currentNumber", currentNumber + 1);

    currentBattleNum++;
    setValue("currentBattleNum", currentBattleNum + "回");

    return battleResult;
}

/**
 * 勝敗のダイアログを表示し、各値の更新を行う
 */

function showResult() {
    if (restartGameFlg) {
        // ゲームの再開時は値の更新だけ行う
        setValue("ratio", betCoinNum + "(×" + Math.floor(currentRatio) + ")");
        restartGameFlg = false;
        return;
    }

    if (battleResult == GAMERESULT_EQUAL) {
        // 引き分けだった場合
        updateBetCoin(GAMERESULT_EQUAL);
        window.alert("引き分けです");
    } else if (battleResult == currentChoice) {
        // 勝利した場合
        updateBetCoin(GAMERESULT_WIN);
        window.alert("あなたの勝ちです");
        currentWin++;
    } else if (battleResult != currentChoice) {
        // 負けた場合
        updateBetCoin(GAMERESULT_LOSE);
        window.alert("あなたの負けです");
    }

    // 各値の更新を行う
    setChoice(CHOICE_NO);
    setValue("ratio", betCoinNum + "(×" + Math.floor(currentRatio) + ")");
    setValue("currentChain", currentChain + "回");
    setValue("currentCoin", currentCoin + "枚");
    setValue("currentWin", currentWin + "勝");

    // ゲーム終了条件を満たした場合、終了時の処理を行う。
    if (isClearFinishCond()) {
        setFinalSttParam();
        window.alert(
            "ゲームクリアです　あなたの最終スコアは以下の通りです\n" +
            "最大連勝数：" + maxChain + "回\n" +
            "合計勝利数：" + currentWin + "回\n" +
            "最終勝負数：" + currentBattleNum + "回\n" +
            "最終持ちコイン枚数：" + currentCoin + "枚\n" +
            "コイン獲得率：" + coinGetRate + "\n"
        );
    }

}

/**
 * コインの払い戻しを行う
 */

function refund() {
    if (showGameOver() != 1) {
        // ゲームオーバーまたはゲームクリアの場合、何もせず終了する
        return;
    }

    if (currentChain < CAN_REFUND_WIN_NUM) {
        // 連勝数が規定回数未満の場合
        window.alert("連勝数が" + CAN_REFUND_WIN_NUM + "回未満です。");
        return;
    }

    // 賭けコインを持ちコインに還元する
    currentCoin += betCoinNum;
    betCoinNum = 0;

    // 連勝数をリセットする
    currentChain = 0;
    currentRatio = 2;

    // カードプールと現在のカードをリセットする
    initcardPool();
    currentNumber = -1;
    setValue("currentNumber", "");

    // 各値の更新を行う
    setChoice(CHOICE_NO);
    setValue("ratio", betCoinNum + "(×" + currentRatio + ")");
    setValue("currentChain", currentChain + "回");
    setValue("currentCoin", currentCoin + "枚");

    // ゲーム終了条件を満たした場合、終了時の処理を行う。
    if (isClearFinishCond()) {
        setFinalSttParam();
        window.alert(
            "ゲームクリアです　あなたの最終スコアは以下の通りです\n" +
            "最大連勝数：" + maxChain + "回\n" +
            "合計勝利数：" + currentWin + "回\n" +
            "最終勝負数：" + currentBattleNum + "回\n" +
            "最終持ちコイン枚数：" + currentCoin + "枚\n" +
            "コイン獲得率：" + coinGetRate + "\n"
        );
    }
}

/**
 * コインがない場合のアラートを表示する。
 * @returns 0 ゲームオーバー
 * @returns 1 ゲーム継続中
 * @returns 2 ゲームクリア
 */

function showGameOver() {
    if (gameOverFlg) {
        window.alert("ゲームオーバーです 再開する場合はカードをめくってください");
        return 0;
    } else if (gameClearFlg) {
        window.alert("ゲームクリアです 再開する場合はカードをめくってください");
        return 2;
    } else {
        return 1;
    }
}

/**
 * ゲーム終了条件の判定を行う。
 * @returns true  終了条件を満たしている
 * @returns false 終了条件を満たしていない
 */
function isClearFinishCond() {
    isFinish = false;

    if (cardTotal == 0) {
        // カード枚数が0になった場合
        currentCoin += betCoinNum;
        isFinish = true;
    }

    if (currentCoin >= MAX_COIN_NUM) {
        // コイン枚数が上限を超えた場合
        isFinish = true;
    }

    gameClearFlg = isFinish;

    return isFinish;
}

/**
 * ゲーム終了時、最終持ちコイン枚数、コイン獲得率の計算を行い、
 * 最終ステータスパラメータを設定する。
 */
function setFinalSttParam() {
    // コイン獲得率の計算（小数第二位まで算出する）
    coinGetRate = Math.floor((currentCoin / currentBattleNum) * 100) / 100;

    // 各パラメータの設定
    finalStateParam.maxChain = maxChain;
    finalStateParam.winNum = currentWin;
    finalStateParam.battleNum = currentBattleNum;
    finalStateParam.totalCoinNum = currentCoin;
    finalStateParam.coinGetRate = coinGetRate;
}
