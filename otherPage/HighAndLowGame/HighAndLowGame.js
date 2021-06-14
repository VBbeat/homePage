// 各変数の設定
currentChoice = "";
choice_high = "ハイ";
choice_low = "ロー";
choice_equal = "イコール";
currentChain = 0;
currentWin = 0;
currentRatio = 1;
currentCoin = 100;
currentNumber = "";
newNumber = "";
betCoinNum = 0;
betCoinMin = 1;
betCoinMax = currentCoin;

cardPool = [];
cardNum = 4;
MaxNumber = 10;
currentNumber = 0;

gameOverFlg = false;

/**
 * すべての変数の初期化
 */
function initAll() {
    currentChoice = "";
    currentChain = 0;
    currentWin = 0;
    currentRatio = 1;
    currentCoin = 100;
    gameOverFlg = false;

    // カードプールの初期化
    initcardPool();
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
 * カードをめくる
 * @returns [0-9]:正常 -1:残りカード0枚
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
    // 入力ダイアログを表示、賭けコイン枚数を入力
    betNum = window.prompt("賭けるコインの枚数を入力してください", "");
    if (isNaN(betNum)) {
        // 数字入力エラー
        window.alert("数字で入力してください");
    }
    betNum = Number(betNum);
    if (betNum < betCoinMin || betNum > betCoinMax) {
        // 入力範囲エラー
        window.alert("コインの枚数は(" + betCoinMin + "-" + betCoinMax + ")で入力してください");
    }

    // 賭けコインを現在の枚数から引く
    currentCoin -= betNum;

    // 賭けコインを変数に設定する
    betCoinNum += betCoinNum;

    // 各値の更新を行う
    setValue("currentCoin", currentCoin + "枚");
    setValue("ratio", betCoinNum + "(×" + Math.floor(currentRatio) + ")");
}

/**
 * 勝敗の判定を行う。
 * @returns 0 エラー
 * @returns 1 ロー
 * @returns 2 ハイ
 * @returns 3 同じ数字
 */
function judge() {
    if (newNumber > currentNumber) {
        return 2;
    } else if (newNumber < currentNumber) {
        return 1;
    } else if (newNumber == currentNumber) {
        return 3;
    }

    return 0;
}

/**
 * 一枚目のカードをセットする
 */
function setFirstCard() {
    currentNumber = setNewCard();
    return;
}

/**
 * 勝負を行い、諸々のステータスの更新を行う。
 */
function runGame() {
    if (currentNumber == "") {
        // 最初のカードをセットする。
        setFirstCard();
        return;
    }
    // 賭けコインの枚数が足りていない場合
    if (betCoinNum < betCoinMin) {
        window.alert("賭けコインの枚数が足りていません");
        return;
    }

    // ハイ,ローの選択がされていない場合
    if (currentChoice == "") {
        window.alert("ハイかローを選択してください");
        return;
    }

    // カードをめくる
    newNumber = setNewCard();

    // 勝敗の判定を行う
    result = judge();
}