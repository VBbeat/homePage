// タイトルシーン
phina.define('TitleScene', {
    superClass: 'DisplayScene',
    // コンストラクタ
    init: function () {
        this.superInit();

        // タイトル
        Label({
            text: 'タイトルシーン',
            fontSize: 64,
        }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(4));

        Label({
            text: "TOUCH START",
            fontSize: 32,
        }).addChildTo(this)
            .setPosition(this.gridX.center(), this.gridY.span(12))
            .tweener.fadeOut(1000).fadeIn(500).setLoop(true).play();
        // 画面タッチ時
        this.on('pointend', function () {
            // 次のシーンへ
            this.exit();
        });
    },
    // 毎フレーム更新処理
    update: function () {
    },
});