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
    hitTestPlayer: function () {
        // thisを退避
        var self = this;

        // [繰返]プレイヤーが発射した弾に対する処理
        self.playerBulletGroup.children.each(function (bullet) {
            // TODO: ここの処理を書く
            // 円判定
            var a = Circle(self.enemy.x, self.enemy.y, 20);
            var b = Circle(bullet.x, bullet.y, 10);


            if (Collision.testCircleCircle(a, b)) {

                --PLAYER_HP;
                if (PLAYER_HP > 0) {
                    self.Impact(bullet.x, bullet.y);
                    bullet.remove();
                } else {
                    self.exit('result', {
                        score: 0,
                        message: 'Game Over'
                    });
                }
            }
        });
    },

    // 毎フレーム更新処理
    update: function (app) {
        this.currentFrame = app.frame;

    }

});