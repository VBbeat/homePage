// アセット
var ASSETS = {
    image: {
        player_normal: './img/chara/player/player_normal.png',
        player_power: './img/chara/player/player_power.png',
        player_range: './img/chara/player/player_range.png',
        player_speed: './img/chara/player/player_speed.png',
        player_super: './img/chara/player/player_super.png',

        boss_1: './img/chara/boss_1.png',

        title: './img/bg/title.png',

        bullet_normal: './img/bullet/bullet_normal.png',
        bullet_speed: './img/bullet/bullet_speed.png',
    }
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

// 画面幅、画面高さ
var SCREEN_WIDTH = 640;
var SCREEN_HEIGHT = 960;

// 各方向のプレイヤーの移動速度
var SPEED_PLAYER_X = 3;
var SPEED_PLAYER_Y = 3;