document.writeln("<table id='gameField'>");
for (let i = 0; i < FIELD_ROW; i++) {
    document.writeln("<tr>");
    for (let j = 0; j < FIELD_COL; j++) {
        document.writeln("<td></td>");
    }
    document.writeln("</tr>");
}
document.writeln("</table>");