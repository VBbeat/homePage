phina.define('GameScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function () {
        this.superInit();
        // 自機
        this.player = Player().addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());

        // ボス
        this.boss_1 = Boss_1().addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(2.5));
    },

    // 毎フレーム更新処理
    update: function (app) {

    }
});