document.write("<table class='MapTable'>");
for (var i = 0; i < MAP_ROWS; i++) {
    document.write("<tr>");
    for (var j = 0; j < MAP_COLS; j++) {
        document.write("<td class='mapCell' id=" + i + "_" + j + " onclick='writeCellDirect(" + j + "," + i + ")'></td>");

    }
    document.write("</tr>");
}
document.write("</table>");