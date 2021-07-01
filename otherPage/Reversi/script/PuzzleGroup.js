
document.write('<table>');
for (var row = 0; row < BOARD_ROW; row++) {
    document.write('<tr>');
    for (var col = 0; col < BOARD_COL; col++) {
        document.writeln('<td id="board' + row + '_' + col + '"></td>');
    }
    document.write('</tr>');
}
document.write('</table>');