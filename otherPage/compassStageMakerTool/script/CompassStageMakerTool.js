/* 初期処理 */
initMapArray();

function setMode(modeId) {
    writeModeId = modeId;
    document.getElementById("modeName").innerHTML = MODE_NAME[modeId];

}

function writeShape() {

    switch (writeModeId) {
        case 0:
            writeEllipse();
            break;
    }

    setBlockNum();

}

function writeEllipse() {
    var widthR = parseInt(document.getElementById("ModeParamValue1").value) / 2;
    var heightR = parseInt(document.getElementById("ModeParamValue2").value) / 2;

    var x = 0;
    var y = 0;
    for (var r = 0; r <= 360; r++) {
        var x = widthR * Math.cos(Math.PI * r / 180);
        var y = heightR * Math.sin(Math.PI * r / 180);
        writeCell(Math.round(x + widthR), Math.round(y + heightR));
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

function writeCellDirect(col, row) {
    if (mapArray[row][col] == 0) {
        writeCell(col, row);
        mapArray[row][col] = 1;
    } else {
        document.getElementById(row + "_" + col).style.backgroundColor = CELL_COLOR_BLANK;
        mapArray[row][col] = 0;

        blockNum--;
    }

    setBlockNum();
}

function setBlockNum() {
    document.getElementById("blockNum").value = blockNum;
}