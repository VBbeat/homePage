function readDeckDataTxt(filePath) {
    var ROW_DECK_NAME = 0;
    var COL_CARD_TYPE = 0;
    var COL_CARD_NAME = 1;
    var COL_CARD_NUM = 2;

    // デッキ名
    var deckName = "";
    // デッキの配列
    var deckArray = [];

    var deckDataFile = new XMLHttpRequest();

    deckDataFile.open("get", filePath, true);
    deckDataFile.send(null);

    deckDataFile.onload = function () {
        var deckDataLine = deckDataFile.responseText.split("\r\n");
        deckName = deckDataLine[ROW_DECK_NAME];

        // デッキの配列にデータを格納
        for (var i = 1; i < deckDataLine.length; i++) {
            var deckElements = deckDataLine[i].split(',');
            deckCardData = [deckElements[COL_CARD_TYPE], deckElements[COL_CARD_NAME], deckElements[COL_CARD_NUM]];
            deckArray.push(deckCardData);
        }
    }

    return deckArray;
}