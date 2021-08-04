class Puzzle {
    // コンストラクタ
    constructor() {
        this.puzzleGroup = [];
        this.allGreenFlg = false;
    }

    /**
     * パズルの状態を調べ、すべてそろっているならtrueを返す
     * @return false パズルがそろっていない
     * @return true パズルがそろっている
     */
    checkGroupState() { }

    /**
     * 指定の位置のパズルを反転させる、隣のパズルも反転させる
     * @param col 列
     * @param row 行
     * @param rvsNxtPzlFlg 隣のパズルを反転させるフラグ
     */
    reversePuzzle(col, row, rvsNxtPzlFlg) { }

}