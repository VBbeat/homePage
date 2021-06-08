// 各変数の定義
fieldWidth = 1000;
fieldHeight = 500;
fieldCellSize = 20;
fieldRowNum = fieldHeight / fieldCellSize;
fieldColNum = fieldWidth / fieldCellSize;
fieldBgColor = "#000000";
fieldStrokeColor = "#00FF00";

// フィールドの状態
fieldState_old = [];
fieldState_new = [];

var canvas = document.getElementById("canvas");
var field = canvas.getContext('2d');

// フィールドの初期化
initFieldState();
// マウスイベントのセット
setMouseListener();
// ゲームループを扱う変数
var gameLoop;
// ループしているかどうかのフラグ
var loopFlag = false;

// 最初の描画を行う
drawField();

// ループ状態の初期表示
setLoopState();


// フィールドの初期化を行う。
function initFieldState() {
    // ループ停止時のみ初期化処理を行う
    if (loopFlag) {
        return;
    }

    for (var i = 0; i < fieldRowNum; i++) {
        var initFieldState = [];
        for (var j = 0; j < fieldColNum; j++) {
            initFieldState[j] = 0;
        }
        fieldState_new[i] = initFieldState;
        fieldState_old[i] = initFieldState.slice();
    }
    drawField();
}

// マウスイベントをキャンバスにセットする。
function setMouseListener() {
    // キャンバス上のクリックイベント
    canvas.addEventListener("click", e => {
        // マウスの座標をCanvas内の座標とあわせるため
        const rect = canvas.getBoundingClientRect();

        // クリック座標
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        if (!loopFlag) {
            // クリック処理
            // クリックされた座標にあるセルの状態を反転する
            var cellY = Math.floor(y / fieldCellSize);
            var cellX = Math.floor(x / fieldCellSize);
            fieldState_new[cellY][cellX] = (fieldState_new[cellY][cellX] + 1) % 2;
            // 画面の再描画
            drawField();
        }

    });
}

// フィールドの状態を更新する
function updateField() {
    for (var i = 0; i < fieldRowNum; i++) {
        fieldState_old[i] = fieldState_new[i].slice();
    }
    for (var i = 0; i < fieldRowNum; i++) {
        for (var j = 0; j < fieldColNum; j++) {
            var activeCellNum = countNextCell(i, j);
            if (fieldState_old[i][j] == 0) {
                if (activeCellNum == 3) {
                    fieldState_new[i][j] = 1;
                } else {
                    fieldState_new[i][j] = 0;
                }
            } else if (fieldState_old[i][j] == 1) {
                if (activeCellNum <= 1 || activeCellNum >= 4) {
                    fieldState_new[i][j] = 0;
                } else {
                    fieldState_new[i][j] = 1;
                }
            }
        }
    }
}

// 隣接するセルで生きているセルの数をカウントする。
function countNextCell(i, j) {
    // 生きているセルの数
    var activeCellNum = 0;

    for (var iDir = -1; iDir <= 1; iDir++) {
        // 上端または下端の場合
        if (i + iDir < 0 || i + iDir >= fieldRowNum) {
            continue;
        }
        for (var jDir = -1; jDir <= 1; jDir++) {
            // 左端または右端の場合
            if (j + jDir < 0 || j + jDir >= fieldColNum) {
                continue;
            }
            // 自分自身はカウントしない
            if (iDir == 0 && jDir == 0) {
                continue;
            }
            activeCellNum += fieldState_old[i + iDir][j + jDir];

        }
    }
    return activeCellNum;
}


// キャンバスを描画する
function drawField() {

    // 描画内容

    // 初期化
    field.clearRect(0, 0, fieldWidth, fieldHeight);
    // 格子の設定
    field.strokeStyle = fieldStrokeColor;
    field.lineWidth = 2;
    field.beginPath();

    // セルの状態の反映
    for (var i = 0; i < fieldRowNum; i++) {
        for (var j = 0; j < fieldColNum; j++) {
            var cellColor = "";
            if (fieldState_new[i][j] == 0) {
                cellColor = fieldBgColor;
            } else {
                cellColor = fieldStrokeColor;
            }
            field.fillStyle = cellColor;
            field.fillRect(j * fieldCellSize, i * fieldCellSize, fieldCellSize, fieldCellSize);
        }
    }

    // 縦線
    for (var j = 0; j < fieldWidth; j += fieldCellSize) {
        field.moveTo(j, 0);
        field.lineTo(j, fieldHeight);
    }

    // 横線
    for (var i = 0; i < fieldHeight; i += fieldCellSize) {
        field.moveTo(0, i);
        field.lineTo(fieldWidth, i);
    }

    field.stroke();
}

// ライフゲームループ
function loopGame() {
    updateField();
    drawField();
}

// ライフゲームループのスタート
function startLoop() {
    // ループしていない時のみ処理を行う
    if (loopFlag) {
        return;
    }

    gameLoop = setInterval(loopGame, 250);
    loopFlag = true;
}

// ライフゲームループのストップ
function stopLoop() {
    clearInterval(gameLoop);
    loopFlag = false;
}

// ループを一つ進める
function stepLoop() {
    // ループしていない時のみ処理を行う
    if (loopFlag) {
        return;
    }

    loopGame();
}

// ループ状態を表示する
function setLoopState() {
    var loopStateElement = document.getElementById("loopState");
    var loopState = "";
    if (loopFlag) {
        loopState = "ループ中";
    } else {
        loopState = "停止中　"
    }

    loopStateElement.innerHTML = loopState;
}

// 各入力値を設定し反映する
function setOption() {
    // テキストボックスに入力した値を取得する
    var bgColor = document.getElementById("bgColor").value;
    var cellColor = document.getElementById("cellColor").value;
    // var width = document.getElementById("width").value;
    // var height = document.getElementById("height").value;

    // 各設定を変数に反映する
    fieldBgColor = bgColor;
    fieldStrokeColor = cellColor;
    // fieldWidth = width;
    // fieldHeight = height;

    // 画面の再描画を行う
    drawField();
}