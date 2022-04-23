phina.define('Bullet_boss1_special', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function (speed_x, speed_y) {
        this.superInit('bullet_boss1_special');

        // 弾速を設定
        this.physical.velocity.y = speed_y;
        this.physical.velocity.x = speed_x;

        // 弾の幅を設定
        this.circWidth = BULLET_BOSS1_SPECIAL_WIDTH;

    },

    // 毎フレーム更新処理
    update: function (app) {

        // 画面下部に到達したら削除
        if (this.top >= SCREEN_HEIGHT) {
            this.remove();
        }

    }
});