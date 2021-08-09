initBoard();
drawBoard();

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
    boardState[4][3] = STATE_WHITE;
}


/**
 * ボードを更新する
 */
function updateBoard() {

}

/**
 * ボードを描画する
 */
function drawBoard() {

    for (var row = 0; row < BOARD_ROW; row++) {
        for (var col = 0; col < BOARD_COL; col++) {
            if (boardState[row][col] == STATE_EMPTY) {
                continue;
            }

            var elem = document.getElementById("board" + row + "_" + col);
            elem.style.color = STONE_COLOR[String(boardState[row][col])];
            elem.innerHTML = ("●");
        }
    }
}

/**
 * 指定したidに値をセットする
 * @param id id
 * @param value 値
 */
function setValue(id, value) {
    var elm = document.getElementById(id);
    elm.innerHTML = value;
}

/**
 * 指定した位置に現在の色の石を置く
 * @param col 石の列 
 * @param row 石の行
 * @param isReverse 周りの石をひっくり返すかどうか
 */
function putStone(col, row, isReverse) {

    if (isReverse) {
        // 石を直接置く場合
        if (boardState[row][col] == STATE_CANPUT) {
            // その座標に石が置ける場合
            boardState_new[row][col] = currentColor;

        }
    }
}