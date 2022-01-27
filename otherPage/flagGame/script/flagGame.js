/**
 * 変数を初期化する
 */
function init() {
    // 旗の状態の初期化
    flag_state_white = FLAG_STATE_DOWN;
    flag_state_red = FLAG_STATE_DOWN;

    // 指示クリア回数の初期化
    flag_clear_num = 0;

    // 指示文のリセット
    orderText_all = ORDERTEXT_INIT;
}

/**
 * 旗の状態の切り替え
 * @param flagColor 旗の色
 * @param flagPosition 旗の上下
 */
function changeFlagState(flagColor, flagPosition) {
    // 旗の位置を変える
    flag_state[flagColor] = flagPosition;

    // 旗の位置
}