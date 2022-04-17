// アセット
var ASSETS = {
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

    font: { 'bitFont': '../../font/PixelMplus12-Regular.ttf' },
};

// シーン
var SCENES = [
    {
        className: 'TitleScene',
        label: 'title',
        nextLabel: 'game',
    },

    {
        className: 'GameScene',
        label: 'game'
    }

]

// タイトル
var TITLE_STRING = 'うさシューティング';

// 画面幅、画面高さ
var SCREEN_WIDTH = 640;
var SCREEN_HEIGHT = 960;

// 弾の移動速度
// プレイヤー_通常弾
var SPEED_Y_BULLET_NORMAL = 28;

// 弾の発射間隔（フレーム）
// プレイヤー_通常弾
var INTERVAL_BULLET_NORMAL = 6;