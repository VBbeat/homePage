
document.write('<table>');
for (var i = 0; i < PUZZLE_ROW; i++) {
    document.write('<tr>');
    for (var j = 0; j < PUZZLE_COL; j++) {
        document.writeln('<td id="puzzle' + i + '_' + j + '"></td>');
    }
    document.write('</tr>');
}
document.write('</table>');