<?php
    //セッションが開始されていない場合、開始する
    if(is_null(session_id())){
        session_start();
    }
?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="./scripts/head.js"></script>

    <!-- 各ページ固有のタグの読み込み -->
    <meta property="og:url" content="http://vbbeat.com/index.php" />
    <link rel="stylesheet" type="text/css" href="./css/iconTable.css">
</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <iframe src="php/header.php" frameborder="0" width="100%"></iframe>
    </header>

    <!-- メイン部分 -->
    <main>
        <div class="iconTable">
            <div class="iconElement">
                <form method="get" name="member" action="php/articleList.php">
                    <input type=hidden name="category" value="member">
                    <a href="javascript:member.submit()" class="tac">
                        <div class="iconImage">
                            <img src="./img/icon_Member.png">
                        </div>
                        <div class="iconTitle">
                            Member
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="music" action="php/articleList.php">
                    <input type=hidden name="category" value="music">
                    <a href="javascript:music.submit()" class="tac">
                        <div class="iconImage">
                            <img src="./img/icon_Music.png">
                        </div>
                        <div class="iconTitle">
                            Music
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="game" action="php/articleList.php">
                    <input type=hidden name="category" value="game">
                    <a href="javascript:game.submit()" class="tac">
                        <div class="iconImage">
                            <img src="./img/icon_Game.png">
                        </div>
                        <div class="iconTitle">
                            Game
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="illust" action="php/articleList.php">
                    <input type=hidden name="category" value="illust">
                    <a href="javascript:illust.submit()" class="tac">
                        <div class="iconImage">
                            <img src="./img/icon_Illust.png">
                        </div>
                        <div class="iconTitle">
                            Illust
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="novel" action="php/articleList.php">
                    <input type=hidden name="category" value="novel">
                    <a href="javascript:novel.submit()" class="tac">
                        <div class="iconImage">
                            <img src="./img/icon_Novel.png">
                        </div>
                        <div class="iconTitle">
                            Nobel
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="information" action="php/articleList.php">
                    <input type=hidden name="category" value="information">
                    <a href="javascript:information.submit()" class="tac">
                        <div class="iconImage">
                            <img src="./img/icon_Info.png">
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
        <iframe src="php/footer.php" frameborder="0" width="100%"></iframe>
    </footer>

</body>

</html>