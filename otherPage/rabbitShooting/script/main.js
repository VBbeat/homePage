// phina.js をグローバル領域に展開
phina.globalize();

// メイン処理
phina.main(function () {
    // アプリケーション生成
    var app = GameApp({
        assets: {
            image: {
                player_normal: './img/chara/player/player_normal.png',
                player_power: './img/chara/player/player_power.png',
                player_range: './img/chara/player/player_range.png',
                player_speed: './img/chara/player/player_speed.png',
                player_super: './img/chara/player/player_super.png',

                boss_1: './img/chara/boss_1.png',

                bg_title: './img/bg/title.png',

                bullet_normal: './img/bullet/player/bullet_normal.png',
                bullet_speed: './img/bullet/player/bullet_speed.png',
            },

            font: { 'bitFont': './font/PixelMplus12-Regular.ttf' },
        },
        scenes: SCENES,
        startLabel: 'title',
        fps: 60,
    });

    // アプリケーション実行
    app.run();
});