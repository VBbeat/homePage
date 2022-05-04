phina.define('GameScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function () {
        this.superInit();

        // 現在のフレーム数
        this.currentFrame = 0;
        // ゲーム開始時のフレーム数
        this.startFrame = 0;
        // 背景
        this.backgroundColor = '#DDDDDD';

        // 各オブジェクトグループ
        // 敵の弾
        this.enemyBossBulletGroup = DisplayElement().addChildTo(this);
        // プレイヤーの弾
        this.playerBulletGroup = DisplayElement().addChildTo(this);
        // 敵機（ボス）
        this.enemyBoss = Boss_1().addChildTo(this).setPosition(
            this.gridX.center(),
            Y_BOSS1
        );
        // 自機
        this.player = Player().addChildTo(this).setPosition(
            this.gridX.center(),
            this.gridY.center()
        );
        // プレイヤーのアイテム
        this.playerItemGroup = DisplayElement().addChildTo(this);

        // プレイヤー情報表示
        this.playerInfoRect = RectangleShape({
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT / 8,
            fill: "#111111",
        }).addChildTo(this).setPosition(
            SCREEN_WIDTH / 2,
            SCREEN_HEIGHT * 15 / 16
        );

        // 自機のppゲージ
        this.playerPpGuage = PpGuage().addChildTo(this).setPosition(
            X_PP_GUAGE,
            Y_PP_GUAGE
        );

        // プレイヤーのハート
        this.playerHeartGroup = DisplayElement().addChildTo(this);

        // プレイヤーのハート数
        this.currentPlayerHeartNum = PLAYER_HEART_NUM;
        // [繰返]プレイヤーのハートを画面左下に表示する
        for (var i = 0; i < this.currentPlayerHeartNum; i++) {
            Icon_playerHeart().addChildTo(this.playerHeartGroup).setPosition(
                PLAYER_HEART_X - i * (PLAYER_HEART_WIDTH + PLAYER_HEART_DISP_SPACE_X),
                PLAYER_HEART_Y
            );
        }

    },

    /**
     * 画面タッチorクリックされている場合の処理
     */
    onpointstay: function (e) {

        if (this.runEvent(INTERVAL_BULLET_NORMAL)) {
            // プレイヤー_通常弾の発射処理を実行

            // プレイヤーの弾を生成
            Bullet_normal().addChildTo(this.playerBulletGroup).setPosition(this.player.x, this.player.y);
        }
    },

    /**
     * 画面タッチorクリックを離した場合の処理
     */
    onpointend: function (e) {

        if (this.playerPpGuage.value >= SPECIAL_VALUE_PP_GUAGE) {
            // スペシャルの実行の処理

            if (this.player.style == STYLE_NORMAL) {
                // ノーマルスタイルの場合

                if (this.currentPlayerHeartNum < MAX_PLAYER_HEART_NUM) {
                    // ハートが最大値未満の場合

                    // ゲージを消費する
                    this.playerPpGuage.value -= SPECIAL_VALUE_PP_GUAGE;

                    // ハートの値を1増やす
                    this.currentPlayerHeartNum++;

                    // ハートの表示数を増やす
                    Icon_playerHeart().addChildTo(this.playerHeartGroup).setPosition(
                        PLAYER_HEART_X - (this.currentPlayerHeartNum - 1) * (PLAYER_HEART_WIDTH + PLAYER_HEART_DISP_SPACE_X),
                        PLAYER_HEART_Y
                    );
                }
            }
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

                // 敵のライフを減らす
                self.enemyBoss.lifeGuage.value -= bullet.bulletPower;

                if (self.enemyBoss.lifeGuage.value <= 0) {
                    // 敵のライフが0になった場合

                    // ゲームクリア画面に遷移
                    self.exit('gameClear', { clearFrame: self.currentFrame - self.startFrame });
                }

                // PPゲージを増やす
                self.playerPpGuage.value++;

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
            var colCircBullet = Circle(bullet.x, bullet.y, bullet.circWidth / 2);

            if (Collision.testCircleCircle(colCircPlayer, colCircBullet)) {
                // プレイヤーが弾に当たった場合

                // プレイヤーのハート数を減らす
                self.currentPlayerHeartNum -= bullet.bulletPower;
                if (self.currentPlayerHeartNum < 0) {
                    // ハートが切れた場合、画面を遷移する

                    // 暫定：ゲームオーバーシーンに遷移
                    self.exit('gameOver');
                } else {
                    // ハートがまだ残っている場合
                    // ハートの表示数を減らす
                    for (var i = 0; i < bullet.bulletPower; i++) {
                        self.playerHeartGroup.children.last.remove();
                    }
                }
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

        if (this.startFrame == 0) {
            this.startFrame = this.currentFrame;
        }

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
            var bulletSpeed = this.enemyBoss.calcBulletSpeed(this.player.x, this.player.y, "normal");

            // 弾の生成
            Bullet_boss1_normal(bulletSpeed.speed_x, bulletSpeed.speed_y).addChildTo(this.enemyBossBulletGroup).setPosition(
                this.enemyBoss.x,
                this.enemyBoss.y
            );
        }

        if (this.runEvent(INTERVAL_BULLET_BOSS1_SPECIAL)) {
            // ボス1_スペシャル弾の発射処理を実行

            // 弾速の計算
            var bulletSpeed = this.enemyBoss.calcBulletSpeed(this.player.x, this.player.y, "special");

            // 弾の生成
            Bullet_boss1_special(bulletSpeed.speed_x, bulletSpeed.speed_y).addChildTo(this.enemyBossBulletGroup).setPosition(
                this.enemyBoss.x,
                this.enemyBoss.y
            );
        }

        // TODO: アイテムの処理を記載
        // if (this.runEvent(INTERVAL_CHANGE_ITEM)) {
        //     // パワーアップアイテムの生成処理を実行

        //     // 生成するパワーアップアイテムを乱数で確定する
        //     var item_style = 1;

        //     // アイテムを生成する
        //     Item_powerUp().addChildTo(this.playerItemGroup).setPosition(
        //         Math.floor(Math.random() * (SCREEN_WIDTH - ITEM_STYLE_CHANGE_WIDTH) + (ITEM_STYLE_CHANGE_WIDTH / 2)),
        //         0
        //     );
        // }
    }
});