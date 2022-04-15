phina.define('GameScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function () {
        this.superInit();
        // 自機
        this.player = Player().addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
    },

    // 毎フレーム更新処理
    update: function (app) {
    }
});