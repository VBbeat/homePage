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
// プレイヤー_通常弾
const BULLET_NORMAL_WIDTH = 28;
const BULLET_NORMAL_HEIGHT = 28;

// ボス
const BOSS_1_WIDTH = 256;
const BOSS_1_HEIGHT = 256;

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