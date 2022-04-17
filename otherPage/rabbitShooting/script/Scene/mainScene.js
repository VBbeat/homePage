phina.define('GameScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function () {
        this.superInit();

        // 各オブジェクトグループ
        this.playerBulletGroup = DisplayElement().addChildTo(this);

        // 自機
        this.player = Player().addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
        // ボス
        this.boss_1 = Boss_1().addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(2.5));

        // 現在のフレーム数
        this.currentFrame = 0;

    },

    // タッチイベントの設定
    // タッチされた+継続してタッチされている場合
    onpointstay: function (e) {

        if (this.currentFrame % INTERVAL_BULLET_NORMAL == 0) {
            // プレイヤーの弾を生成
            Bullet_normal().addChildTo(this.playerBulletGroup).setPosition(this.player.x, this.player.y);
        }
    },

    // 毎フレーム更新処理
    update: function (app) {
        this.currentFrame = app.frame;

    }

});