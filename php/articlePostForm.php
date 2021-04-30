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
  
    $title = isset($_SESSION["postTitle"]) ? $_SESSION["postTitle"] : '';
    $name = '';
    $content = isset($_SESSION["postContent"]) ? $_SESSION["postContent"] : '';

    //フッターの新規作成ボタンから遷移した場合
    if(isset($_POST["newArticle"])){
        $title = '';
        $content = '';

        //エラー表示を初期化する
        $_SESSION["postCategoryError"] = 0;
        $_SESSION["postTitleError"] = 0;
        $_SESSION["postContentError"] = 0;

        //入力内容を初期化する
        $_SESSION["postCategory"] = '';
        $_SESSION["postTitle"] = '';
        $_SESSION["postContent"] = '';
    }

    if(isset($_SESSION["postName"])){
        $name = $_SESSION["postName"];
    }else{
        if(isLogin()){
            $name = $_SESSION["userName"];
        }
    }
?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="../scripts/head.js"></script>

    <!-- 各ページ固有のタグの読み込み -->
    <meta property="og:url" content="http://vbbeat.com/article.php" />
    <link rel="stylesheet" type="text/css" href="../css/window.css">
    <link rel="stylesheet" type="text/css" href="../css/articlePost.css">
</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <?php include('header.php'); ?>
    </header>

    <!-- メイン部分 -->
    <main>
        <?php if($_SESSION["postCategoryError"] === 1) : ?>
            <p class="errorMessage">記事のカテゴリを選択してください</p>
        <?php endif ?>
        
        <?php if($_SESSION["postTitleError"] === 1) : ?>
            <p class="errorMessage">記事のタイトルを設定してください</p>
        <?php endif ?>
        
        <?php if($_SESSION["postContentError"] === 1) : ?>
            <p class="errorMessage">記事の内容を記述してください</p>
        <?php endif ?>

        <?php
            //もうエラーは表示済みなのでエラー判定を初期化する
            $_SESSION["postCategoryError"] = 0;
            $_SESSION["postTitleError"] = 0;
            $_SESSION["postContentError"] = 0;
        ?>

        <div class="window">
            <div class="windowHeader">
                <div class="windowTitle">
                    <span class="windowIcon">■</span>記事投稿フォーム
                </div>
                <a href="articleList.php" class="tac">
                    <span class="backButton">×</span>
                </a>
            </div>
            <form action="articlePostConfirm.php" method="post">
                <div class="windowContent">
                    <ul class="postItemList">
                        <li class="postItem">
                            <select name="postCategory" id="postCategory">
                                <option value="" hidden disabled <?php if(!(isset($_POST["postCategory"])))echo 'selected' ?>><label>記事カテゴリを選択</label></option>
                                <option value="member" <?php if(isset($_SESSION["postCategory"]) && $_SESSION["postCategory"]==="member")echo 'selected' ?>><label>Member</label></option>
                                <option value="music" <?php if(isset($_SESSION["postCategory"]) && $_SESSION["postCategory"]==="music")echo 'selected' ?>><label>Music</label></option>
                                <option value="game" <?php if(isset($_SESSION["postCategory"]) && $_SESSION["postCategory"]==="game")echo 'selected' ?>><label>Game</label></option>
                                <option value="illust" <?php if(isset($_SESSION["postCategory"]) && $_SESSION["postCategory"]==="illust")echo 'selected' ?>><label>Illust</label></option>
                                <option value="novel" <?php if(isset($_SESSION["postCategory"]) && $_SESSION["postCategory"]==="novel")echo 'selected' ?>><label>Novel</label></option>
                                <option value="information" <?php if(isset($_SESSION["postCategory"]) && $_SESSION["postCategory"]==="information")echo 'selected' ?>><label>Information</label></option>
                            </select>
                        </li>
                        <li class="postItem">
                            <input type="text" name="postTitle" value="<?= $title ?>" placeholder="ここにタイトルを入力">
                        </li>
                        <li class="postItem">
                            <input type="text" name="postName" value="<?= $name ?>" readonly>
                        </li>
                        <li class="postItem">
                            <textarea name="postContent" rows="15" placeholder="ここに記事内容を入力"><?= $content ?></textarea>
                        </li>
                        <li class="postItem">
                            <input type="submit" value="決定" class="miniButton">
                        </li>
                    </ul>
                </div>
            </form>
        </div>

    </main>
    <!-- フッタ部分 -->
    <footer>
        <?php include('footer.php'); ?>
    </footer>
</body>

</html>