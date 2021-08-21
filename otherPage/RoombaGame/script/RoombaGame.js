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

    set x() {
        return this.x;
    }

    set y() {
        return this.y;
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

}

