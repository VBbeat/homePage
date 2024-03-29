<?php
    require_once "system/common.php";

    //セッションが開始されていない場合、開始する
    startSession(session_id());

    //ログインしていない場合、ログインページに遷移する
    if(toLoginPage($_SESSION["userName"], basename($_SERVER["REQUEST_URI"]))) {
        $no_login_url = "../index.php";
        header("Location: {$no_login_url}");
        exit;
    }

    date_default_timezone_set('Asia/Tokyo');
    $articlePath = '../data/article/' . $_SESSION["postCategory"] . '/';
    $articleFile = date('YmdHis');
    $handle = fopen($articlePath . $articleFile . '.vbtx', 'w+');

    /* ダミータグの設定 */
    $_SESSION["postTags"] = "#testTag";

    fwrite($handle, $_SESSION["postTitle"] . "\n");
    fwrite($handle, $_SESSION["postDate"] . "\n");
    fwrite($handle, $_SESSION["postName"] . "\n");
    fwrite($handle, $_SESSION["postTags"] . "\n");
    fwrite($handle, $_SESSION["postContent"]);
?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="../scripts/head.js"></script>

    <!-- 各ページ固有のタグの読み込み -->
    <meta http-equiv="refresh" content="3; url=home.php" />
</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <?php include('header.php'); ?>
    </header>

    <!-- メイン部分 -->
    <main>
        <p>投稿が完了しました。3秒後にホーム画面に戻ります。</p>
    </main>

    <!-- フッタ部分 -->
    <footer>
        <?php include('footer.php'); ?>
    </footer>

</body>

</html>