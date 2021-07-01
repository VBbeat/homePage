

/**
 * ボードを初期化する
 */
function initBoard() {
    for (var row = 0; row < BOARD_ROW; row++) {
        var state_tmp = [];
        for (var col = 0; col < BOARD_COL; col++) {
            state_tmp[col] = STATE_EMPTY;
        }
        boardState[row] = state_tmp;
        boardState_new[row] = state_tmp.slice();
    }

    // 初期配置を行う
    boardState[3][3] = STATE_BLACK;
    boardState[4][4] = STATE_BLACK;
    boardState[3][4] = STATE_WHITE;
    boardSTate[4][3] = STATE_WHITE;
}


/**
 * ボードを更新する
 */
function updateBoard() {

}
