document.writeln("<table>");
for(let i = 0; i < FIELD_ROW; i++){
    document.writeln("<tr>");
    for(let j = 0; j < FIELD_COL; j++){
        document.writeln("<td id='field_" + i + "_" + j + "'>");
        document.writeln("</td>");
    }
    document.writeln("</tr>");
}
document.writeln("</table>");