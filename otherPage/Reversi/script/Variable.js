// ボードの行と列の数
const BOARD_COL = 8;
const BOARD_ROW = 8;

// ボードの状態を表す変数
const STATE_WHITE = 1;
const STATE_BLACK = -1;
const STATE_EMPTY = 0;

// 黒白の色の定義
const STONE_COLOR = {
    "1": "#FFFFFF",
    "-1": "#000000"
};

// ボードそのものを表す変数
var boardState = [];
var boardState_new = [];

// 現在の手番
var currentColor;