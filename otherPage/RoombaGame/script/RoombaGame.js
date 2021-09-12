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

function updateGame() {

}

/**
 * 初期化処理を行う
 */
function initGame(roomba) {
    initField();
    roomba.init();
}

