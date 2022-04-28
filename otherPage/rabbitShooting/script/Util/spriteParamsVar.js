// プレイヤー_通常弾
// 弾の移動速度
var SPEED_BULLET_NORMAL = BULLET_NORMAL_HEIGHT;
// 弾の発射間隔
var INTERVAL_BULLET_NORMAL = 6;
// 弾のパワー
var POWER_BULLET_NORMAL = 1;

// ボス1_通常弾
// 弾の移動速度
var SPEED_BULLET_BOSS1_NORMAL = 7;
// 弾の発射間隔（連続発射間隔）
var INTERVAL_BULLET_BOSS1_NORMAL = 8;
// 弾の発射間隔（連続発射の判定間隔）
var INTERVAL_BULLET_BOSS1_NORMAL_JUDGE = 90;
// 弾の連続発射弾数
var SEQ_SHOT_NUM_BULLET_BOSS1_NORMAL = 6;
// 弾のパワー
var POWER_BULLET_BOSS1_NORMAL = 1;

// ボスの設定
// 表示位置
const Y_BOSS1 = 160;

// ハートの設定
var MAX_LIFE_BOSS1 = 300;
// ボス1_スペシャル弾
// 弾の移動速度
var SPEED_BULLET_BOSS1_SPECIAL = 2;
// 弾の発射間隔
var INTERVAL_BULLET_BOSS1_SPECIAL = 400;
// 弾のパワー
var POWER_BULLET_BOSS1_SPECIAL = 4;

// スタイルチェンジアイテム
// アイテムの移動速度
var SPEED_CHANGE_ITEM = 5;
// アイテムの種類
const STYLE_NORMAL = 0;
const STYLE_SPEED = 1;
const STYLE_POWER = 2;
const STYLE_RANGE = 3;
const STYLE_SPECIAL = 4;

// プレイヤーのハート数
var PLAYER_HEART_NUM = 4;
// ハートの表示位置
const PLAYER_HEART_DISP_SPACE_X = 12;
const PLAYER_HEART_DISP_SPACE_Y = 18;
const PLAYER_HEART_X = SCREEN_WIDTH - (PLAYER_HEART_WIDTH + PLAYER_HEART_DISP_SPACE_X) * PLAYER_HEART_NUM;
const PLAYER_HEART_Y = SCREEN_HEIGHT - (PLAYER_HEART_HEIGHT + PLAYER_HEART_DISP_SPACE_Y);

// ライフゲージ
// ライフゲージの幅と高さ
const LIFE_GUAGE_WIDTH = SCREEN_WIDTH - 64;
const LIFE_GUAGE_HEIGHT = 16;

// 表示位置（敵）
const Y_LIFE_GUAGE_ENEMY = 300;