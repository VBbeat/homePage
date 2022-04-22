phina.define('Boss_1', {
    superClass: 'Sprite',

    // コンストラクタ
    init: function () {
        this.superInit('boss_1');

        // 連続発射回数
        this.seqShotNum = 0;
    },

    /**
     * 連続発射回数の準備
     */
    setSeqShotNum: function () {
        this.seqShotNum = SEQ_SHOT_NUM_BULLET_BOSS1_NORMAL;
    },

    /**
     * 連続発射中かどうかを返す
     */
    getSeqShot: function () {
        if (this.seqShotNum != 0) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * プレイヤーとの距離、弾速を計算
     * @param player_x プレイヤーのx座標
     * @param player_y プレイヤーのy座標
     * @returns 弾速
     */
    calcBulletSpeed: function (player_x, player_y) {
        // 連続発射回数を設定
        if (this.seqShotNum != 0) {
            this.seqShotNum--;
        }

        // プレイヤーとの距離
        var distToPlayer = Math.sqrt(
            Math.pow(this.x - player_x, 2) +
            Math.pow(this.y - player_y, 2)
        );

        // 弾速
        var bulletSpeed = {
            speed_x: SPEED_BULLET_BOSS1_NORMAL * (player_x - this.x) / distToPlayer,
            speed_y: SPEED_BULLET_BOSS1_NORMAL * (player_y - this.y) / distToPlayer,
        }

        return bulletSpeed;
    },

    // 毎フレーム更新処理
    update: function (app) {

    }
});