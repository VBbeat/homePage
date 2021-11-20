MAP_COLS = 80;
MAP_ROWS = 80;

CELL_COLOR_WRITE = "004D00";
CELL_COLOR_BLANK = "FFFFFF";

MODE_NAME = [
    "円",
    "四角形",
    "自由描画"
];


var writeModeId = 0;
var mapArray = [];
var mapArrayHistory = [];
var blockNum = 0;
var blockNumHistory = [];