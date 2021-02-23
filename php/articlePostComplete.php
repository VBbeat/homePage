<?php
    require_once "system/common.php";

    //セッションが開始されていない場合、開始する
    startSession(session_id());

    //ログインしていない場合、ログインページに遷移する
    if(toLoginPage($_SESSION["userName"], basename(__FILE__))) {
        $no_login_url = "../index.php";
        header("Location: {$no_login_url}");
        exit;
    }

    
    $articlePath = '../data/article/' . $_SESSION["category"] . '/';
    $articleNo = 1;
    $artNoGlb = glob($articlePath . "*.vbtx");
    foreach($artNoGlb as $art){
        $articleNo++;
    }
    $handle = fopen($articlePath . $articleNo . '.vbtx', 'w+');

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
        <iframe src="header.php" frameborder="0" width="100%"></iframe>
    </header>

    <!-- メイン部分 -->
    <main>
        <p>投稿が完了しました。3秒後にホーム画面に戻ります。</p>
    </main>

    <!-- フッタ部分 -->
    <footer>
        <iframe src="footer.php" frameborder="0" width="100%"></iframe>
    </footer>

</body>

</html>