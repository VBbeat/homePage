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
        <?php if($_SESSION["siteTitleMultiBiteError"]) : ?>
            <p class="errorMessage">システム名は半角文字のみにしてください</p>
        <?php endif ?>
        
        <?php if($_SESSION["siteTitleEmptyError"]) : ?>
            <p class="errorMessage">システム名を入力してください</p>
        <?php endif ?>
        
        <?php if($_SESSION["versionFormatError"]) : ?>
            <p class="errorMessage">バージョンの形式は「[数字].[数字].[数字]」となるようにしてください</p>
        <?php endif ?>
        
        <?php if($_SESSION["versionEmptyError"]) : ?>
            <p class="errorMessage">バージョンを入力してください</p>
        <?php endif ?>

        <?php
            //もうエラーは表示済みなのでエラー判定を初期化する
            $_SESSION["siteTitleEmptyError"] = 0;
            $_SESSION["siteTitleMultiBiteError"] = 0;
            $_SESSION["versionEmptyError"] = 0;
            $_SESSION["versionFormatError"] = 0;
        ?>
        <div class="window">
            <div class="windowHeader">
                <div class="windowTitle">
                    <span class="windowIcon">■</span>マスタ編集
                </div>
                <a href="home.php" class="tac">
                    <span class="backButton">×</span>
                </a>
            </div>
            <div class="windowContent">
            <form action="masterEditConfirm.php" method="post">
                <p class="alertMessage">※マスタ情報を編集する場合は必ず同意を得てから編集してください。</p>
                <p>システム名：<input type="text" name="siteTitle" value="<?= $_SESSION['siteTitle'] ?>" /></p>
                <p>バージョン番号：<input type="text" name="version" value="<?= $_SESSION['version'] ?>" /></p>
                <p><input type="submit" value="決定" class="miniButton"></p>
            </form>
            </div>
        </div>
    </main>

    <!-- フッタ部分 -->
    <footer>
        <?php include('footer.php'); ?>
    </footer>
</body>

</html>