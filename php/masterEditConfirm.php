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

    //各入力項目のチェック
    //エラーが起きた場合、マスタ編集画面に戻る
    $newVersion = "";
    $newSiteTitle = "";
    $occurredError = false;

    if(empty($_POST["version"])){
        $_SESSION["versionEmptyError"] = 1;
        $occurredError = $occurredError || true;
    }elseif(!preg_match('/^\d+\.\d+\.\d+$/u', $_POST["version"])){
        $_SESSION["versionFormatError"] = 1;
        $occurredError = $occurredError || true;
    }else{
        $newVersion = $_POST["version"];
    }

    if(empty($_POST["siteTitle"])){
        $_SESSION["siteTitleEmptyError"] = 1;
        $occurredError = $occurredError || true;
    }elseif(!preg_match('/^[\x20-\x7e]*$/u', $_POST["siteTitle"])){
        $_SESSION["siteTitleMultiBiteError"] = 1;
        $occurredError = $occurredError || true;
    }else{
        $newSiteTitle = $_POST["siteTitle"];
    }

    if($occurredError){
        $masterEditPage = "masterEdit.php";
        header("Location: {$masterEditPage}");
        exit;
    }

?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="../scripts/head.js"></script>
</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <?php include('header.php'); ?>
    </header>

    <!-- メイン部分 -->
    <main>
        <p>本当にマスタ情報を変更しますか？</p>
        <div>
            <form method="POST">
                <input type="hidden" name="newSiteTitle" value="<?= $newSiteTitle ?>" />
                <input type="hidden" name="newVersion" value="<?= $newVersion ?>" />
                <input type="submit" name="change" value="変更" formaction="masterEditComplete.php" class="miniButton_direct">
                <input type="submit" name="back" value="戻る" formaction="masterEdit.php" class="miniButton_direct">
            </form>
        </div>
    </main>

    <!-- フッタ部分 -->
    <footer>
        <?php include('footer.php'); ?>
    </footer>

</body>

</html>