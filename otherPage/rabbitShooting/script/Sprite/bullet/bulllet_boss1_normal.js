phina.define('Bullet_boss1_normal', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function () {
        this.superInit('bullet_boss1_normal');

        // 弾速を設定
        this.physical.velocity.y = SPEED_BULLET_BOSS1_NORMAL;
    },

    // 毎フレーム更新処理
    update: function (app) {

        // 画面下部に到達したら削除
        if (this.top >= SCREEN_HEIGHT) {
            this.remove();
        }

    }
});