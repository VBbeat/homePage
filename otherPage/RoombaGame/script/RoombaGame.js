/**
 * ルンバを定義する
 */
class Roomba {
    /**
     * コンストラクタ
     */
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    /**
     * プレイヤーの位置の初期化を行う
     */
    init() {
        this.x = 0;
        this.y = 0;
    }

    /**
     * 任意の方向に移動する
     * @param {int} vx x方向
     * @param {int} vy y方向
     */
    move(vx, vy) {
        this.x += vx;
        this.y += vy;
    }

}

/**
 * 新たな盤面をセットする
 */
function setField() {

}

function updateFieldState(buttonCode){
    field_old = field_true;
    switch(buttonCode){
        case BUTTON_CODE_MOVEUP:
            if(roomba.y == 0){
                alert("その方向には動けません");
            }else{
                roomba.move(0, -1);
            }
            break;

        case BUTTON_CODE_MOVELEFT:
            if(roomba.x == 0){
                alert("その方向には動けません");
            }else{
                roomba.move(-1, 0);
            }
            break;

        case BUTTON_CODE_MOVEDOWN:
            if(roomba.y == FIELD_ROW - 1){
                alert("その方向には動けません");
            }else{
                roomba.move(0, 1);
            }
            break;

        case BUTTON_CODE_MOVERIGHT:
            if(roomba.x == FIELD_COL - 1){
                alert("その方向には動けません");
            }else{
                roomba.move(1, 0);
            }
            break;
                                
    }

    for(let i = 0; i < FIELD_ROW; i++){
        for(let j = 0; j < FIELD_COL; j++){
            if(field_old[i][j] == STATE_ROOMBA){
                field_true[i][j] = STATE_BLANK;
            }
        }
    }
    field_true[roomba.y][roomba.x] = STATE_ROOMBA;

    updateField();
}

function updateField(){
    for(let i = 0; i < FIELD_ROW; i++){
        for(let j = 0; j < FIELD_COL; j++){
            switch(field_true[i][j]){
                case STATE_BLOCK:
                    setTableBg(i, j, ID_FIELD, STRING_BLOCK_COLOR);
                    break;
                case STATE_ROOMBA:
                    setTableValue(i, j, ID_FIELD, STRING_ROOMBA);
                    setTableColor(i, j, ID_FIELD, STRING_ROOMBA_COLOR);
                    break;
                case STATE_BLANK:
                    setTableValue(i, j, ID_FIELD, STRING_BLANK);
                    setTableColor(i, j, ID_FIELD, STRING_BLANK_COLOR);
                    setTableBg(i, j, ID_FIELD, STRING_BLANK_COLOR);
                    break;
            }
        }
    }
}

/**
 * 盤面を初期化する
 */
function initField() {
    field_true = [];

    for (let i = 0; i < FIELD_ROW; i++) {
        field_true[i] = [];
        for (let j = 0; j < FIELD_COL; j++) {
            field_true[i][j] = STATE_BLANK;
        }
    }
}

/**
 * 初期化処理を行う
 */
function initGame() {
    initField();
    roomba = new Roomba();
    roomba.init();
    setTableValue(roomba.y, roomba.x, ID_FIELD, STRING_ROOMBA);
    setTableColor(roomba.y, roomba.x, ID_FIELD, STRING_ROOMBA_COLOR);
}


initGame();
