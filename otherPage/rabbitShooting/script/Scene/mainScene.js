phina.define('GameScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function () {
        this.superInit();

        // 各オブジェクトグループ
        this.playerBulletGroup = DisplayElement().addChildTo(this);

        // 自機
        this.player = Player().addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.center()
        );

        // ボス
        this.boss_1 = Boss_1().addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.span(2.5)
        );

        // 現在のフレーム数
        this.currentFrame = 0;

        // thisを退避
        var self = this;

        // 背景
        self.backgroundColor = '#DDDDDD';

    },

    // タッチイベントの設定
    // タッチされた+継続してタッチされている場合
    onpointstay: function (e) {

        if (this.currentFrame % INTERVAL_BULLET_NORMAL == 0) {
            // 発射間隔を空けたのち、発射処理を実行

            // プレイヤーの弾を生成
            Bullet_normal().addChildTo(this.playerBulletGroup).setPosition(this.player.x, this.player.y);
        }
    },

    // 敵機当たり判定
    hitTestEnemy: function () {
        // thisを退避
        var self = this;

        // [繰返]プレイヤーが発射した弾に対する処理
        self.playerBulletGroup.children.each(function (bullet) {

            // 円判定
            var colCircBoss_1 = Circle(self.boss_1.x, self.boss_1.y, BOSS_1_WIDTH / 2);
            var colCircBullet = Circle(bullet.x, bullet.y, BULLET_NORMAL_WIDTH / 2);

            if (Collision.testCircleCircle(colCircBoss_1, colCircBullet)) {
                // 敵が弾に当たった場合

                // 弾を削除
                bullet.remove();
            }
        });
    },

    // 毎フレーム更新処理
    update: function (app) {
        // フレーム数の取得
        this.currentFrame = app.frame % FRAME_RESET_INTERVAL;

        // 敵と自分の弾の当たり判定を行う
        this.hitTestEnemy();

    }

});