// 各変数の設定
currentChoice = "";
choice_high = "ハイ";
choice_low = "ロー";
choice_equal = "イコール";
currentChain = 0;
currentWin = 0;
currentCoin = 100;

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
 */
function setValue(id, value) {
    var element = document.getElementById(id);
    element.innerHTML = value;
}

/**
 * カードをめくる
 * @returns [0-9]: 正常 -1: 残りカード0枚
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