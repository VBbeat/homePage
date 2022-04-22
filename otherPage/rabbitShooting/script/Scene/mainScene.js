phina.define('GameScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function () {
        this.superInit();

        // 各オブジェクトグループ
        this.playerBulletGroup = DisplayElement().addChildTo(this);
        this.enemyBossBulletGroup = DisplayElement().addChildTo(this);

        // 自機
        this.player = Player().addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.center()
        );

        // 敵機（ボス）
        this.enemyBoss = Boss_1().addChildTo(this).setPosition(
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

    /**
     * 画面タッチorクリックされている場合の処理
     * @param 
     */
    onpointstay: function (e) {

        if (this.runEvent(INTERVAL_BULLET_NORMAL)) {
            // プレイヤー_通常弾の発射処理を実行

            // プレイヤーの弾を生成
            Bullet_normal().addChildTo(this.playerBulletGroup).setPosition(this.player.x, this.player.y);
        }
    },

    /**
     * 敵機と自弾の当たり判定の計算
     */
    hitTestEnemy: function () {
        // thisを退避
        var self = this;

        // [繰返]プレイヤーが発射した弾に対する処理
        self.playerBulletGroup.children.each(function (bullet) {

            // 円判定
            var colCircBoss_1 = Circle(self.enemyBoss.x, self.enemyBoss.y, (BOSS_1_WIDTH * 0.9) / 2);
            var colCircBullet = Circle(bullet.x, bullet.y, BULLET_NORMAL_WIDTH / 2);

            if (Collision.testCircleCircle(colCircBoss_1, colCircBullet)) {
                // 敵が弾に当たった場合

                // 弾を削除
                bullet.remove();
            }
        });
    },

    /**
     * 自機と敵弾の当たり判定の計算
     */
    hitTestPlayer: function () {
        // thisを退避
        var self = this;

        // [繰返]敵_ボスが発射した弾に対する処理
        self.enemyBossBulletGroup.children.each(function (bullet) {

            // 円判定
            var colCircPlayer = Circle(self.player.x, self.player.y, (PLAYER_WIDTH * 0.9) / 2);
            var colCircBullet = Circle(bullet.x, bullet.y, BULLET_BOSS1_NORMAL_WIDTH / 2);

            if (Collision.testCircleCircle(colCircPlayer, colCircBullet)) {
                // プレイヤーが弾に当たった場合

                // 弾を削除
                bullet.remove();
            }
        });
    },

    /**
     * 現在のフレーム数から、イベントの発火タイミングであるか判定する
     * @param eventFrame イベントのフレーム間隔
     * @returns true: 発火タイミングである false: 発火タイミングでない
     */
    runEvent: function (eventFrame) {
        // イベントの発火タイミングである場合はtrue, そうでなければfalseをreturnする
        return (this.currentFrame % eventFrame == 0);
    },

    // 毎フレーム更新処理
    update: function (app) {
        // フレーム数の取得
        this.currentFrame = app.frame % FRAME_RESET_INTERVAL;

        // 敵機と自弾の当たり判定を行う
        this.hitTestEnemy();
        // 自機と敵弾の当たり判定を行う
        this.hitTestPlayer();

        if (this.runEvent(INTERVAL_BULLET_BOSS1_NORMAL_JUDGE)) {
            // ボス1_通常弾の連続発射回数の設定
            this.enemyBoss.setSeqShotNum();
        }

        if (this.runEvent(INTERVAL_BULLET_BOSS1_NORMAL) && this.enemyBoss.getSeqShot()) {
            // ボス1_通常弾の発射処理を実行

            // 弾速の計算
            var bulletSpeed = this.enemyBoss.calcBulletSpeed(this.player.x, this.player.y);

            // 弾の生成
            Bullet_boss1_normal(bulletSpeed.speed_x, bulletSpeed.speed_y).addChildTo(this.enemyBossBulletGroup).setPosition(this.enemyBoss.x, this.enemyBoss.y);
        }

    }

});