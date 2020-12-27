<?php
    date_default_timezone_set('Asia/Tokyo');
    if(isset($_POST["postTitle"])){
        $_SESSION["postTitle"] = $_POST["postTitle"];
    }
    if(isset($_POST["postName"])){
        $_SESSION["postName"] = $_POST["postName"];
    }
    if(isset($_POST["postContent"])){
        $_SESSION["postContent"] = $_POST["postContent"];
    }
    $_SESSION["postDate"] = date("Y/m/d H:i:s");
?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="../scripts/head.js"></script>

    <!-- 各ページ固有のタグの読み込み -->
    <meta property="og:url" content="http://vbbeat.com/article.php" />
    <link rel="stylesheet" type="text/css" href="../css/window.css">
</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <iframe src="header.php" frameborder="0" width="100%"></iframe>
    </header>

    <!-- メイン部分 -->
    <main>
        <p>プレビューを確認し、「投稿」ボタンを押してください。</p>
        <div class="window">
            <div class="windowHeader">
                <div class="windowTitle">
                    <span class="windowIcon">■</span>
                    <?= $_SESSION["postTitle"] ?>
                </div>
                <a href="articlePostForm.php" class="tac">
                    <span class="backButton">×</span>
                </a>
            </div>
            <div class="windowContent">
                <p>投稿者：<?= $_SESSION["postName"] ?></p>
                <p>投稿日時：<?= $_SESSION["postDate"] ?></p>
                <hr>
                <p><?= nl2br($_SESSION["postContent"]) ?></p>
                <form action="articlePostComplete.php" method="post">
                    <input type="submit" value="投稿" class="miniButton">
                </form>
            </div>
        </div>
    </main>
    <!-- フッタ部分 -->
    <footer>
        <iframe src="footer.php" frameborder="0" width="100%"></iframe>
    </footer>
</body>

</html>