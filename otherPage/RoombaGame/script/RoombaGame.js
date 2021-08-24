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
     * 任意の方向に移動する
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
    field_masking = [];
    field_true = [];

    let field_tmp = [];
}

