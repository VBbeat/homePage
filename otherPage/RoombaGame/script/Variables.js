const FIELD_COL = 7;
const FIELD_ROW = 7;

const STATE_ROOMBA = -1;
const STATE_BLANK = 0;
const STATE_TRASH = 1;
const STATE_BLOCK = 2;
const STATE_BOMB = 3;
const STATE_GOAL = 4;
const STATE_PASSED = 5;

const STRING_ROOMBA = "●";
const STRING_ROOMBA_COLOR = "#FF0000";

const STRING_BLANK = "";
const STRING_BLANK_COLOR = "#FFFFFF";

const STRING_BLOCK_COLOR = "#555555";

const BUTTON_CODE_MOVEUP = "1";
const BUTTON_CODE_MOVELEFT = "2";
const BUTTON_CODE_MOVEDOWN = "3";
const BUTTON_CODE_MOVERIGHT = "4";

const ID_FIELD = "gameField";

let field_true = [];
let field_old = [];
let roomba;