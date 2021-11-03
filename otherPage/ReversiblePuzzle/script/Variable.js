const PUZZLE_COL = 3;
const PUZZLE_ROW = 3;
const PUZZLE_COLOR_TRUE = "#22FF22";
const PUZZLE_COLOR_FALSE = "#DDFFDD";

var gameStartTime_ms;
var gameEndTime_ms;
var currentReverseNum;
var gameClearFlg;
var gameStartFlg;
var puzzle;

var scoreRankObj_player = [
    {
        time    : 0,
        revNum  : 0
    },
    {
        time    : 0,
        revNum  : 0
    },
    {
        time    : 0,
        revNum  : 0
    },
];
