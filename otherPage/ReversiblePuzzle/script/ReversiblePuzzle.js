/**
 * ゲームを開始する
 * @param mode 難易度 0:かんたん 1:ふつう 2:むずかしい 3:いじげん
 */
function startGame(mode) {

    if (gameStartFlg) {
        // ゲーム中の場合

        // 処理を終了する
        return;
    }

    // ゲーム開始フラグをオンにする
    gameStartFlg = true;

    // 反転回数を初期化する
    currentReverseNum = 0;

    // パズルを生成する
    puzzle = new Puzzle(mode);
    puzzle.initPuzzle();

    switch (mode) {
        case 0:
            // 難易度かんたんの場合

            // プレイ済フラグをオンにする
            clearEasyFlg = true;

            // 全て裏の状態で開始する
            break;
        case 1:
            // 難易度普通の場合

            // プレイ済フラグをオンにする
            clearNormalFlg = true;

            // ランダムでパネルを3つ表にする
            puzzle.setRandomReversePuzzle(3);

            break;
        case 2:
            // 難易度むずかしいの場合

            // プレイ済フラグをオンにする
            clearHardFlg = true;

            // ランダムで1, 2, 7, 8つのパネルをオンにする
            var rand = (Math.floor(Math.random() * 4 + 6) % 8) + 1;
            puzzle.setRandomReversePuzzle(rand);

            break;

        case 3:
            // 難易度いじげんの場合

            // ランダムで1, 2, 7, 8つのパネルをオンまたはニュートラルにする
            var rand = (Math.floor(Math.random() * 4 + 6) % 8) + 1;
            puzzle.setRandomReversePuzzle(rand);

            break;
    }


    // 画面の描画を行う
    updateHtml();

    // ゲームの開始時間を取得する
    gameStartTime_ms = (new Date()).getTime();
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

        if (clearEasyFlg && clearNormalFlg && clearHardFlg && !openSuperHardModeFlg) {

            // 全ての難易度をプレイした場合、難易度いじげんを開放する
            document.getElementById("superHard").style.display = "block";

            alert("難易度：いじげん　が解放されました。")

            openSuperHardModeFlg = true;

        }
    }
}

/**
 * 画面の状態を更新する
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
                case 2:
                    // パズルの状態がニュートラルの場合

                    // パズルの色を変更する
                    document.getElementById(i + "_" + j).style.backgroundColor = PUZZLE_COLOR_NEUTRAL;

                    break;
            }
        }
    }

    // 反転回数を表示する
    document.getElementById("reverseNum").innerHTML = currentReverseNum;

}