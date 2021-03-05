<?php
    require_once "php/system/common.php";

    //セッションが開始されていない場合、開始する
    startSession(session_id());

    $_SESSION["userName"] = "";
    $error_message = "";
    $login_success_url = "php/home.php";

    if(isset($_SESSION["lastPage"])){
        $login_success_url = $_SESSION["lastPage"];
    }

    if(isset($_POST["login"])) {
        if(isMember($_POST["userName"])) {
            $_SESSION["isMemberLogin"] = true;
            header("Location: {$login_success_url}");
            exit;
        }
        $error_message = "※ユーザ名が間違っています。<br>　もう一度入力して下さい。";
    } else if(isset($_POST["guestLogin"])) {
        $_SESSION["userName"] = "guest";
        header("Location: {$login_success_url}");
        exit;
    }

?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="../scripts/head.js"></script>

    <!-- 各ページ固有のタグの読み込み -->
    <meta property="og:url" content="http://vbbeat.com/login.php" />

</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <?php include('php/header.php'); ?>
    </header>

    <!-- メイン部分 -->
    
    <link rel="stylesheet" type="text/css" href="../css/loginForm.css">
    <main>
        <div id="loginForm">
            <form action="index.php" method="POST" autocomplete="off">
                <p>ようこそ</p>
                <p><input type="text" name="userName"></p>
                <p id="loginButton"><input type="submit" name="login" value="ログイン" class="miniButton">
                <input type="submit" name="guestLogin" value="ゲストでログイン" class="miniButton">
                </p>
            </form>
            <div id="errorMsg"><?= $error_message ?></div>
        </div>

    </main>
</body>

</html>