// phina.js をグローバル領域に展開
phina.globalize();

// メイン処理
phina.main(function () {
    // アプリケーション生成
    var app = GameApp({
        title: 'Rabbit Shooting',
        startLabel: 'title'
    });
    // アプリケーション実行
    app.run();
});
