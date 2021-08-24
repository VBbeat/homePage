const FIELD_COL = 5;
const FIELD_ROW = 5;

const STATE_ROOMBA = -1;
const STATE_BLANK = 0;
const STATE_TRASH = 1;
const STATE_BLOCK = 2;
const STATE_BOMB = 3;
const STATE_GOAL = 4;

let field_masking = [];
let field_true = [];