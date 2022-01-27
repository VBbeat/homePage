// 旗の状態を表す定数
const FLAG_STATE_UP = 1;
const FLAG_STATE_DOWN = 0;

// 旗の色のコードを表す定数
const FLAG_COLOR_CODE_RED = "#FF4444";
const FLAG_COLOR_CODE_WHITE = "#444444";

// 旗の色を表す定数
const FLAG_COLOR_RED = "red";
const FLAG_COLOR_WHITE = "white";

// 指示文
const ORDERTEXT_INIT = "ここに指示文が表示されます";

// 旗の状態
var flag_state = {
    white: FLAG_STATE_DOWN,
    red: FLAG_STATE_UP
};

// 指示をクリアした回数
var flag_clear_num;

// 指示文（色）
// 指示文（状態）
// 指示文（全体）
var orderText_color;
var orderText_state;
var orderText_all;