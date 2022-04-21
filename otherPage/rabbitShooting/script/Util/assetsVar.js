// アセット
const ASSETS = {
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
        bullet_boss1_normal: './img/bullet/boss_1/bullet_boss1_normal',
        bullet_boss1_special: './img/bullet/boss_1/bullet_boss1_special',
    },

    font: { 'bitFont': './font/PixelMplus12-Regular.ttf' },
};

// 各スプライトの幅/高さ

// プレイヤー
const PLAYER_WIDTH = 64;
const PLAYER_HEIGHT = 64;

// ボス
const BOSS_1_WIDTH = 256;
const BOSS_1_HEIGHT = 256;

// プレイヤー_通常弾
const BULLET_NORMAL_WIDTH = 28;
const BULLET_NORMAL_HEIGHT = 28;

// ボス1_通常弾
const BULLET_BOSS1_NORMAL_WIDTH = 40;
const BULLET_BOSS1_NORMAL_HEIGHT = 40;

// ボス1_スペシャル弾
const BULLET_BOSS1_SPECIAL_WIDTH = 256;
const BULLET_BOSS1_SPECIAL_HEIGHT = 256;

// シーン
const SCENES = [
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