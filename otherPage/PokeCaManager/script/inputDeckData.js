function readDeckDataTxt() {

    // デッキ名
    var deckName = "";
    // デッキの配列
    var deckArray = [];
	
	var filePath = "userData/MuriMuriko_/1.csv";

    var deckDataFile = new XMLHttpRequest();

    deckDataFile.open("get", filePath, true);
    deckDataFile.send(null);

    deckDataFile.onload = function () {
		// デッキデータが読み込まれていない
        csvToArray(deckDataFile.responseText);
		drawDeckList(deckArray);
        console.log(deckArray);
        console.log("1");
    }

    console.log("2");
}

function csvToArray(text) {
    var ROW_DECK_NAME = 0;
    var COL_CARD_TYPE = 0;
    var COL_CARD_NAME = 1;
    var COL_CARD_NUM = 2;

    var deckDataLine = text.split("\r\n");
    deckName = deckDataLine[ROW_DECK_NAME];
    console.log("3");

    // デッキの配列にデータを格納
    for (var i = 1; i < deckDataLine.length; i++) {
        var deckElements = deckDataLine[i].split(',');
        deckCardData = [deckElements[COL_CARD_TYPE], deckElements[COL_CARD_NAME], deckElements[COL_CARD_NUM]];
        deckArray.push(deckCardData);

    }

}

function drawDeckList(deckArray) {
	let deckListArea = document.getElementById("deckListArea");

    deckListArea.insertAdjacentHTML("beforeend","<div class='contentArea'>");
    for (let i = 0; i < 2; i++) {
        deckListArea.insertAdjacentHTML("beforeend",
            "<div class='doubleBorderArea'>" +
            "<div class='deckBlockArea'>" +
            "<table class='deckTable'><tr>" +
            "<td><div class='deckBlockIcon tac'>アイコン</div>" +
            "<div class='deckInfoAbst tac'>デッキ名</div></td>" +
            "<td class='deckDistButtonArea tar'><div class='deckDistButton commonButton'>デッキ詳細</div></td>" +
            "</tr></table>" +
            "</div>" +
            "<div class='deckDistArea'>" +
            "<hr class='dashLine'>" +
            "<table class='deckDistTable'>"
        );

        for (let j = 0; j < 6; j++) {
            var cardType = "";
            if (deckArray[j][CARD_TYPE] == CARD_POKEMON) {
                cardType = "pokemonCol";
            } else if (deckArray[j][CARD_TYPE] == CARD_SUPPORT) {
                cardType = "supportCol";
            } else if (deckArray[j][CARD_TYPE] == CARD_GOODS) {
                cardType = "goodsCol";
            } else if (deckArray[j][CARD_TYPE] == CARD_STADIUM) {
                cardType = "stadiumCol";
            } else if (deckArray[j][CARD_TYPE] == CARD_ENERGY) {
                cardType = "energyCol";
            }
            deckListArea.insertAdjacentHTML("beforeend",
                "<tr>" +
                "<td class='" + cardType + "'>" + deckArray[j][CARD_NAME] + "</td>"
            );
        }
        deckListArea.insertAdjacentHTML("beforeend",
            "</table>" +
            "</div>" +
            "</div>"
        );
    }
    deckListArea.insertAdjacentHTML("beforeend", "</div>");
}