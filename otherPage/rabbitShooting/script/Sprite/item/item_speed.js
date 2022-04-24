phina.define('Item_speed', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function () {
        this.superInit('item_speed');

        // 移動速度を設定
        this.physical.velocity.y = SPEED_CHANGE_ITEM;
    },

    // 毎フレーム更新処理
    update: function (app) {

        // 画面下部に到達したら削除
        if (this.top >= SCREEN_HEIGHT) {
            this.remove();
        }

    }
});