phina.define('PlayerBullet', {
    superClass: 'Sprite',
    // コンストラクタ
    init: function () {
        this.superInit('player_bullet');
        this.physical.velocity.y = -PLAYER_BULLET_SPEED; //弾速
    },
    // 毎フレーム更新処理
    update: function () {
        // 画面上到達で削除
        if (this.top < 0) {
            this.remove();
        }
    }
});