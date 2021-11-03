class Puzzle {
    // コンストラクタ
    constructor() {
        this.puzzleGroup = [];
    }

    /**
     * パズルの状態を初期化する
     */
    initPuzzle() {
        for (var i = 0; i < PUZZLE_ROW; i++) {
            this.puzzleGroup.push([]);
            for (var j = 0; j < PUZZLE_COL; j++) {
                this.puzzleGroup[i].push(0);
            }
        }
    }

    /**
     * 
     * @param reverseNum 反転する個数（1~パズル個数-1）
     */
    setRandomReversePuzzle(reverseNum) {
        for (var i = 0; i < reverseNum; i++) {
            do {
                // ランダムな数を生成する
                var rndNum = Math.floor(Math.random() * (PUZZLE_COL * PUZZLE_ROW))

                var row = Math.floor(rndNum / 3);
                var col = Math.floor(rndNum % 3);
            } while (this.puzzleGroup[row][col] == 1);

            this.puzzleGroup[row][col] = 1;

        }
    }

    /**
     * パズルの状態を調べ、すべてそろっているならtrueを返す
     * @return false パズルがそろっていない
     * @return true パズルがそろっている
     */
    checkGroupState() {
        for (var i = 0; i < PUZZLE_ROW; i++) {
            for (var j = 0; j < PUZZLE_COL; j++) {

                if (this.puzzleGroup[i][j] == 0) {
                    // 一つでも揃っていない場合、falseを返す
                    return false;
                }
            }
        }

        // 全て揃っている場合trueを返す
        return true;
    }

    /**
     * 指定の位置のパズルを反転させる、隣のパズルも反転させる
     * @param col 列
     * @param row 行
     * @param rvsNxtPzlFlg 隣のパズルを反転させるフラグ
     */
    reversePuzzle(col, row, rvsNxtPzlFlg) {
        // 該当するパズルの状態を反転させる
        this.puzzleGroup[row][col] = (this.puzzleGroup[row][col] + 1) % 2;

        if (rvsNxtPzlFlg) {
            // 隣のパズルも反転させる場合

            for (var i = -1; i <= 1; i++) {
                if (row + i < 0 || row + i >= PUZZLE_ROW) {
                    // 範囲外の場合、次のループに進む
                    continue;
                }

                for (var j = -1; j <= 1; j++) {
                    if (col + j < 0 || col + j >= PUZZLE_COL) {
                        // 範囲外の場合、次のループに進む
                        continue;
                    }

                    if (Math.abs(i + j) != 1) {
                        // 調べる位置が斜め、または自分の位置の場合、次のループに進む
                        continue;
                    }

                    // 該当するパズルの状態を反転させる
                    this.reversePuzzle(col + j, row + i, false);
                }
            }
        }
    }

}