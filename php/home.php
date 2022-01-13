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
    <meta property="og:url" content="http://vbbeat.com/php/home.php" />
    <link rel="stylesheet" type="text/css" href="../css/iconTable.css">
</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <?php include('header.php'); ?>
    </header>

    <!-- メイン部分 -->
    <main>
        <div class="iconTable">
            <div class="iconElement">
                <form method="get" name="member" action="articleList.php">
                    <input type=hidden name="category" value="member">
                    <a href="javascript:member.submit()" class="tac">
                        <table class="contentTable">
                            <tr>
                                <td class="contentIconElm">
                                    <div class="contentIcon tac">
                                        <div class="iconImage">
                                            <img src="../img/icon_Member.png">
                                        </div>
                                        <div class="iconTitle">
                                            Member
                                        </div>
                                    </div>
                                </td>
                                <td class="contentAbstElm">
                                    <div class="contentAbst">
                                        １１１１１１１１１１２２２２２２２２２２３３３３３３３３３３４４４４４４４４４４５５５５５５５５５５６６６６６６６６６６
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="music" action="articleList.php">
                    <input type=hidden name="category" value="music">
                    <a href="javascript:music.submit()" class="tac">
                        <div class="iconImage">
                            <img src="../img/icon_Music.png">
                        </div>
                        <div class="iconTitle">
                            Music
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="game" action="articleList.php">
                    <input type=hidden name="category" value="game">
                    <a href="javascript:game.submit()" class="tac">
                        <div class="iconImage">
                            <img src="../img/icon_Game.png">
                        </div>
                        <div class="iconTitle">
                            Game
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="illust" action="articleList.php">
                    <input type=hidden name="category" value="illust">
                    <a href="javascript:illust.submit()" class="tac">
                        <div class="iconImage">
                            <img src="../img/icon_Illust.png">
                        </div>
                        <div class="iconTitle">
                            Illust
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="novel" action="articleList.php">
                    <input type=hidden name="category" value="novel">
                    <a href="javascript:novel.submit()" class="tac">
                        <div class="iconImage">
                            <img src="../img/icon_Novel.png">
                        </div>
                        <div class="iconTitle">
                            Novel
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="tools" action="articleList.php">
                    <input type=hidden name="category" value="tools">
                    <a href="javascript:tools.submit()" class="tac">
                        <div class="iconImage">
                            <img src="../img/icon_Tools.png">
                        </div>
                        <div class="iconTitle">
                            Tools
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="information" action="articleList.php">
                    <input type=hidden name="category" value="information">
                    <a href="javascript:information.submit()" class="tac">
                        <div class="iconImage">
                            <img src="../img/icon_Info.png">
                        </div>
                        <div class="iconTitle">
                            Information
                        </div>
                    </a>
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