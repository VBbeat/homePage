<?php
    require_once "system/common.php";
    require_once "system/updateMaster.php";

    //セッションが開始されていない場合、開始する
    startSession(session_id());

    //ログインしていない場合、ログインページに遷移する
    if(toLoginPage($_SESSION["userName"], basename($_SERVER["REQUEST_URI"]))) {
        $no_login_url = "../index.php";
        header("Location: {$no_login_url}");
        exit;
    }

    //マスタ内容編集処理
    $headerHandle = fopen("../data/master/title_and_version.vbtx", "w");
    fwrite($headerHandle, $_POST["newSiteTitle"] . "\n");
    fwrite($headerHandle, $_POST["newVersion"] . "\n");
    fclose($headerHandle);

    updateMaster();
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
        <p>マスタ情報の変更が完了しました。3秒後にホーム画面に戻ります。</p>
    </main>

    <!-- フッタ部分 -->
    <footer>
        <?php include('footer.php'); ?>
    </footer>

</body>

</html>