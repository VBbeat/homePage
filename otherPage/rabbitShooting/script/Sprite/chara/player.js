phina.define('Player', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function () {
        this.superInit('player_normal');

        // スタイルの設定
        this.style = ITEM_STYLE_NORMAL;
    },

    // 毎フレーム更新処理
    update: function (app) {
        var pointer = app.pointer;

        // プレイヤーの座標をポインタの座標に移動
        this.x = pointer.x;
        this.y = Math.min(pointer.y, MOVABLE_BOTTOM);

    }
});