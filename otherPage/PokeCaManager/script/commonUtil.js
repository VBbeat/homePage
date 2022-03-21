const DECK_MAKE_CARDROW = 30;
function calcTotal() {
    cardTotal = 0;
    cardNum = 0;
    for (let i = 0; i < DECK_MAKE_CARDROW; i++) {
        cardNum = Number(document.getElementById("cardNum_" + i + "").value);
        cardTotal += cardNum;
    }
    document.getElementById("cardNumTotal").innerHTML = cardTotal;
}