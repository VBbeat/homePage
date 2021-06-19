// 各変数の設定
currentChoice = 0;
const choice_no = 0;
const choice_high = 1;
const choice_low = 2;
const choice_equal = 3;
const choice_string = [
    "　　",
    "ハイ",
    "ロー",
    "イコール"
];

const gameResult_win = 1;
const gameResult_lose = 2;
const gameResult_equal = 3;

currentChain = 0;
currentWin = 0;
currentBattleNum = 0;
currentRatio = 1;
currentCoin = 100;
currentNumber = "";
newNumber = "";

betCoinNum = 0;
betCoinMin = 1;
betCoinMax = 100;
const canRefundWinNum = 3;

cardPool = [];
const cardNum = 4;
const MaxNumber = 10;
currentNumber = -1;

battleResult = 0;
gameOverFlg = false;
restartGameFlg = false;

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
    currentRatio = 1;
    currentCoin = 100;
    currentNumber = -1;
    betCoinNum = 0;
    battleResult = 0;
    gameOverFlg = false;

    // カードプールの初期化
    initcardPool();

    // 各値の更新を行う
    setValue("currentNumber", "");
    setValue("currentChain", currentChain + "連勝");
    setValue("currentWin", currentWin + "勝");
    setValue("currentBattleNum", currentBattleNum + "回");
    setValue("currentCoin", currentCoin + "枚");
    setChoice(choice_no);

}

/**
 * カードプールの初期化
 */
function initcardPool() {
    for (var number = 0; number < MaxNumber; number++) {
        cardPool[number] = cardNum;
    }
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

    if (showGameOver() == 0) {
        // ゲームオーバーの場合、何もせず終了する
        return;
    }

    currentChoice = choiceNum;
    setValue("choice", choice_string[choiceNum]);
}

/**
 * カードをめくる
 * @returns [0-9] 正常
 * @returns -1 残りカード0枚
 */
function setNewCard() {
    settableNumber = [];
    for (var i = 0; i < MaxNumber; i++) {
        if (cardPool[i] > 0) {
            settableNumber.push(i);
        }
    }

    if (settableNumber.length == 0) {
        return -1;
    }

    newCardIndex = Math.floor(Math.random() * settableNumber.length);
    newCardNumber = settableNumber[newCardIndex];

    cardPool[newCardNumber] -= 1;

    return newCardNumber;
}

/**
 * コインをかける
 * 
 */

function betCoin() {

    if (showGameOver() == 0) {
        // ゲームオーバーの場合、何もせず終了する
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
 * 勝敗の判定を行う。
 * @returns 0 エラー
 * @returns 1 ハイ
 * @returns 2 ロー
 * @returns 3 同じ数字
 */
function judge() {
    if (newNumber > currentNumber) {
        return choice_high;
    } else if (newNumber < currentNumber) {
        return choice_low;
    } else if (newNumber == currentNumber) {
        return choice_equal;
    }

    return 0;
}

/**
 * 勝敗の判定をもとに、コインと倍率の処理を行う
 * @param gameResult 1: 勝ち 2: 負け
 */
function updateBetCoin(gameResult) {
    if (gameResult == gameResult_win) {
        // 勝負に勝った場合
        currentChain += 1;
        currentRatio = currentRatio * (currentChain + 1);
        betCoinNum *= currentRatio;

    } else if (gameResult == gameResult_lose) {
        // 勝負に負けた場合
        betCoinNum = 0;
        currentRatio = 1;
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
    if (gameOverFlg) {
        window.alert("ゲームを再開します");
        gameOverFlg = false;
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
    if (currentChoice == choice_no) {
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

    if (battleResult == gameResult_equal) {
        // 引き分けだった場合
        updateBetCoin(gameResult_equal);
        window.alert("引き分けです");
    } else if (battleResult == currentChoice) {
        // 勝利した場合
        updateBetCoin(gameResult_win);
        window.alert("あなたの勝ちです");
        currentWin++;
    } else if (battleResult != currentChoice) {
        // 負けた場合
        updateBetCoin(gameResult_lose);
        window.alert("あなたの負けです");
    }

    // 各値の更新を行う
    setChoice(choice_no);
    setValue("ratio", betCoinNum + "(×" + Math.floor(currentRatio) + ")");
    setValue("currentChain", currentChain + "回");
    setValue("currentCoin", currentCoin + "枚");
    setValue("currentWin", currentWin + "勝");

}

/**
 * コインの払い戻しを行う
 */

function refund() {
    if (showGameOver() == 0) {
        // ゲームオーバーの場合、何もせず終了する
        return;
    }

    if (currentChain < canRefundWinNum) {
        // 連勝数が規定回数未満の場合
        window.alert("連勝数が" + canRefundWinNum + "回未満です。");
        return;
    }

    // 賭けコインを持ちコインに還元する
    currentCoin += betCoinNum;
    betCoinNum = 0;

    // 連勝数をリセットする
    currentChain = 0;
    currentRatio = 1;

    // カードプールと現在のカードをリセットする
    initcardPool();
    currentNumber = -1;
    setValue("currentNumber", "");

    // 各値の更新を行う
    setChoice(choice_no);
    setValue("ratio", betCoinNum + "(×" + currentRatio + ")");
    setValue("currentChain", currentChain + "回");
    setValue("currentCoin", currentCoin + "枚");

}

/**
 * コインがない場合のアラートを表示する。
 * @returns 0 ゲームオーバー
 * @returns 1 ゲーム継続中
 */

function showGameOver() {
    if (gameOverFlg) {
        window.alert("ゲームオーバーです 再開する場合はカードをめくってください");
        return 0;
    } else {
        return 1;
    }
}