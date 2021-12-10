document.write("<table class='MapTable'>");
for (var i = 0; i < MAP_ROWS; i++) {
    document.write("<tr>");
    for (var j = 0; j < MAP_COLS; j++) {
        document.write("<td class='mapCell' id=" + i + "_" + j + " onclick='writeCellDirect(" + j + "," + i + ")'></td>");
    }
    document.write("</tr>");
}
document.write("</table>");

var mapCell = document.getElementsByClassName('mapCell');

for (let i = 0; i < mapCell.length; i++) {
    mapCell[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = CELL_COLOR_CURSOR;
    });

    mapCell[i].addEventListener('mouseleave', function () {
        let mapColor = CELL_COLOR_BLANK;

        let row = Math.floor(i / MAP_COLS);
        let col = i % MAP_COLS;

        if (row + mapOffsetRow >= CENTER_BLOCK_ROW_TOP &&
            row + mapOffsetRow < CENTER_BLOCK_ROW_BOTTOM &&
            col + mapOffsetCol >= CENTER_BLOCK_COL_LEFT &&
            col + mapOffsetCol < CENTER_BLOCK_COL_RIGHT
        ) {
            mapColor = CELL_COLOR_DEFAULT;
        }

        if (mapArray[row + mapOffsetRow][col + mapOffsetCol] == 1) {
            mapColor = CELL_COLOR_WRITE;
        }

        this.style.backgroundColor = mapColor;
    });
}