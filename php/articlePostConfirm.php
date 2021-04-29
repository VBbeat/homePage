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

    //各入力項目が空の場合、記事投稿画面に戻る

    date_default_timezone_set('Asia/Tokyo');
    if(isset($_POST["postCategory"])){
        $_SESSION["postCategory"] = $_POST["postCategory"];
        $_SESSION["postCategoryError"] = 0;
    }else{
        $_SESSION["postCategoryError"] = 1;
    }

    if(isset($_POST["postTitle"]) && !empty($_POST["postTitle"])){
        $_SESSION["postTitle"] = $_POST["postTitle"];
        $_SESSION["postTItleError"] = 0;
    }else{
        $_SESSION["postTitleError"] = 1;
    }
    
    if(isset($_POST["postName"])){
        $_SESSION["postName"] = $_POST["postName"];
    }

    if(isset($_POST["postContent"]) && !empty($_POST["postContent"])){
        $_SESSION["postContent"] = $_POST["postContent"];
        $_SESSION["postContentError"] = 0;
    }else{
        $_SESSION["postContentError"] = 1;
    }

    if(isset($_SESSION["postCategoryError"]) || isset($_SESSION["postTitleError"]) || isset($_SESSION["postContentError"])){
        $articlePostPage = "articlePostForm.php";
        header("Location: {$articlePostPage}");
        exit;
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
        <?php include('header.php'); ?>
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
                <p>カテゴリ：<?= $_SESSION["postCategory"] ?></p>
                <p>投稿者　：<?= $_SESSION["postName"] ?></p>
                <p>投稿日時：<?= $_SESSION["postDate"] ?></p>
                <hr>
                <p><?= nl2br($_SESSION["postContent"]) ?></p>
                <hr>
                <p>
                    <form action="articlePostComplete.php" method="post">
                        <input type="submit" value="投稿" class="miniButton">
                    </form>
                </p>
            </div>
        </div>
    </main>
    <!-- フッタ部分 -->
    <footer>
        <?php include('footer.php'); ?>
    </footer>
</body>

</html>