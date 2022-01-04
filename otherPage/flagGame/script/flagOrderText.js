// 旗の状態を指示する指示文の一覧
const FLAG_ORDER_TEXT_STATE = {
    // レベル1
    LEVEL1: {
        UP: "上げて",
        NOT_UP: "上げないで",
        DOWN: "下げて",
        NOT_DOWN: "下げないで",
    },
    // レベル2
    LEVEL2: {
        MOVE: "動かして",
        NOT_MOVE: "動かさないで",
        SAME: "もう一方にそろえて",
        NOT_SAME: "もう一方とそろえないで"
    },
    // レベル3
    LEVEL3: {
        FREE: "好きなようにして"
    }
};

// 旗の色を指示する指示文の一覧
const FLAG_ORDER_TEXT_COLOR = {
    // レベル1
    LEVEL1: {
        WHITE_1: "白",
        WHITE_2: "しろ",
        RED_1: "赤",
        RED_2: "あか"
    },
    // レベル2
    LEVEL2: {
        NOT_RED_1: "赤じゃない方",
        NOT_RED_2: "赤以外",
        NOT_WHITE_1: "白じゃない方",
        NOT_WHITE_2: "白以外"
    },
    // レベル3
    LEVEL3: {
        NOT_NOT_WHITE: "白じゃない方じゃない方",
        NOT_NOT_RED: "赤じゃない方じゃない方",
        FREE: "好きな方"
    }
};
