phina.define('Bullet_normal', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function () {
        this.superInit('bullet_normal');

    },

    // プレイヤーとの距離、弾速を計算
    calcBulletSpeed: function () {

    },

    // 毎フレーム更新処理
    update: function (app) {

        // 画面上部に到達したら削除
        if (this.bottom < 0) {
            this.remove();
        }

    }
});