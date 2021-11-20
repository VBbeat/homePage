/* 初期処理 */
initMapArray();

function setMode(modeId) {
    writeModeId = modeId;
    document.getElementById("modeName").innerHTML = MODE_NAME[modeId];

}

function writeEllipse(offsetCol, offsetRow) {
    var widthR = parseInt(document.getElementById("ModeParamValue1").value) / 2;
    var heightR = parseInt(document.getElementById("ModeParamValue2").value) / 2;

    var x = 0;
    var y = 0;
    for (var r = 0; r <= 360; r++) {
        var x = widthR * Math.cos(Math.PI * r / 180) + offsetCol - widthR;
        var y = heightR * Math.sin(Math.PI * r / 180) + offsetRow - heightR;

        var writeX = Math.round(x + widthR);
        var writeY = Math.round(y + heightR);

        if (writeX < 0 || writeX >= MAP_COLS || writeY < 0 || writeY >= MAP_ROWS) {
            continue;
        }

        writeCell(writeX, writeY);
    }
}

function writeRectangle() {

}

function writeCell(col, row) {
    if (mapArray[row][col] == 0) {
        blockNum++;
        document.getElementById(row + "_" + col).style.backgroundColor = CELL_COLOR_WRITE;
        mapArray[row][col] = 1;
    }
}

function initMapArray() {
    blockNum = 0;
    mapArray = [];
    for (var i = 0; i < MAP_ROWS; i++) {
        mapArray.push([]);
        for (var j = 0; j < MAP_COLS; j++) {
            mapArray[i].push(0);
            document.getElementById(i + "_" + j).style.backgroundColor = CELL_COLOR_BLANK;
        }
    }
    setBlockNum();
}

function getHistory() {
    for (var i = 0; i < MAP_ROWS; i++) {
        mapArrayHistory[i] = mapArray[i].slice(0, mapArray[i].length);
    }
    blockNumHistory = blockNum;
}

function returnHistory() {
    for (var i = 0; i < MAP_ROWS; i++) {
        mapArray[i] = mapArrayHistory[i].slice(0, mapArrayHistory[i].length);
    }
    blockNum = blockNumHistory;

    // 描画
    for (var i = 0; i < MAP_ROWS; i++) {
        for (var j = 0; j < MAP_COLS; j++) {
            var mapColor = CELL_COLOR_BLANK;
            if (mapArrayHistory[i][j] == 1) {
                mapColor = CELL_COLOR_WRITE;
            }
            document.getElementById(i + "_" + j).style.backgroundColor = mapColor;
        }
    }
    setBlockNum();
}

function writeCellDirect(col, row) {

    if (writeModeId == 0) {
        getHistory();
        writeEllipse(col, row);
    } else {
        getHistory();
        if (mapArray[row][col] == 0) {
            writeCell(col, row);
            mapArray[row][col] = 1;
        } else {
            document.getElementById(row + "_" + col).style.backgroundColor = CELL_COLOR_BLANK;
            mapArray[row][col] = 0;

            blockNum--;
        }
    }

    setBlockNum();
}

function setBlockNum() {
    document.getElementById("blockNum").value = blockNum;
}