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

?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="../scripts/head.js"></script>

    <!-- 各ページ固有のタグの読み込み -->
    <!-- <meta http-equiv="refresh" content="3; url=home.php" /> -->
</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <?php include('header.php'); ?>
    </header>

    <!-- メイン部分 -->
    <main>
        <p>本当に記事を削除しますか？（一度削除すると復元できません）</p>
        <div>
            <form method="POST">
                <input type="submit" name="delete" value="削除" formaction="articleDeleteComplete.php" class="miniButton_direct">
                <input type="submit" name="back" value="戻る" formaction="article.php" class="miniButton_direct">
                <input type="hidden" name="articlePath" value="<?= $_POST["articlePath"] ?>">
            </form>
        </div>
    </main>

    <!-- フッタ部分 -->
    <footer>
        <?php include('footer.php'); ?>
    </footer>

</body>

</html>