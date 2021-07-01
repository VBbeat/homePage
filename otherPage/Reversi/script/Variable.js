// ボードの行と列の数
const BOARD_COL = 8;
const BOARD_ROW = 8;

// ボードの状態を表す変数
const STATE_WHITE = 1;
const STATE_BLACK = -1;
const STATE_EMPTY = 0;

// ボードに表示する文字を表す変数
const BOARD_CHAR = {
    "WHITE": "●",
    "BLACK": "○",
    "EMPTY": " "
};

// ボードそのものを表す変数
var boardState = [];
var boardState_new = [];