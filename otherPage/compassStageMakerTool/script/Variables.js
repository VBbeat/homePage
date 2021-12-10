const MAP_COLS = 101;
const MAP_ROWS = 101;
const MAP_COLS_MAX = 201;
const MAP_ROWS_MAX = 201;
const MAP_DEFAULT = 16;

const BLOCK_NUM_MAX = 15000;

const CENTER_BLOCK_COL_LEFT = Math.ceil((MAP_COLS_MAX - MAP_DEFAULT) / 2);
const CENTER_BLOCK_COL_RIGHT = CENTER_BLOCK_COL_LEFT + MAP_DEFAULT;
const CENTER_BLOCK_ROW_TOP = Math.floor((MAP_ROWS_MAX - MAP_DEFAULT) / 2);
const CENTER_BLOCK_ROW_BOTTOM = CENTER_BLOCK_ROW_TOP + MAP_DEFAULT;

const CELL_COLOR_WRITE = "004D00";
const CELL_COLOR_BLANK = "FFFFFF";
const CELL_COLOR_DEFAULT = "88DD88";

const MODE_NAME = [
    "円",
    "四角形",
    "塗りつぶし",
    "自由描画"
];
const MODE_ELLIPSE = 0;
const MODE_RECTANGLE = 1;
const MODE_RANGE = 2;
const MODE_FREE = 3;

const MOVE_AMOUNT = 4;

var writeModeId = 3;
var mapArray = [];
var mapArrayHistory = [];
var blockNum = 0;
var blockNumHistory = [];

var mapOffsetRow = 0;
var mapOffsetCol = 0;
