/**
 * ゲームを開始する
 */
function startGame() {

    if (gameStartFlg) {
        // ゲーム中の場合

        // 処理を終了する
        return;
    }

    gameStartTime_ms = (new Date()).getTime();
    gameStartFlg = true;
    currentReverseNum = 0;

    puzzle = new Puzzle();
    puzzle.initPuzzle();

    puzzle.setRandomReversePuzzle(3);

    updateHtml();
}

/**
 * Puzzle.reversePuzzle(col, row)を呼び出す
 * @param col 行
 * @param row 列
 */
function doReversePuzzle(col, row) {
    if (!gameStartFlg) {
        // ゲームが始まっていない場合

        // 終了する
        return;
    }

    // 該当するパズルの状態を反転させる
    puzzle.reversePuzzle(col, row, true);

    // 反転回数をカウントする
    currentReverseNum++;

    // 画面の状態を更新する
    updateHtml();

    // クリア時のダイアログを表示する。
    setTimeout(showResultDialog, 0);
}

/**
 * ゲームクリア時にダイアログを表示する
 */
function showResultDialog() {

    if (puzzle.checkGroupState()) {
        // パズルが揃っている場合

        // ゲーム開始フラグをfalseにする
        gameStartFlg = false;

        // ゲームクリア時の時刻を取得し、ゲームのプレイ時間を計算する（秒）
        gameEndTime_ms = (new Date()).getTime();
        var gameTime_sec = (gameEndTime_ms - gameStartTime_ms) / 1000;

        // ゲームクリア時のメッセージを生成する
        var clearString =
            'ゲームクリア！ \n' +
            '経過時間：' + gameTime_sec + '秒\n' +
            '反転回数：' + currentReverseNum;

        // ゲームクリアのダイアログを表示する
        alert(clearString);
    }
}

/**
 * 画面の状態をを更新する
 */
function updateHtml() {
    for (var i = 0; i < PUZZLE_ROW; i++) {
        for (var j = 0; j < PUZZLE_COL; j++) {

            switch (puzzle.puzzleGroup[i][j]) {
                case 0:
                    // パズルの状態が裏の場合

                    // パズルの色を変更する
                    document.getElementById(i + "_" + j).style.backgroundColor = PUZZLE_COLOR_FALSE;

                    break;

                case 1:
                    // パズルの状態が表の場合

                    // パズルの色を変更する
                    document.getElementById(i + "_" + j).style.backgroundColor = PUZZLE_COLOR_TRUE;

                    break;
            }
        }
    }

    // 反転回数を表示する
    document.getElementById("reverseNum").innerHTML = currentReverseNum;

}