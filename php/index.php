<?php
?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="../scripts/head.js"></script>

    <!-- 各ページ固有のタグの読み込み -->
    <meta property="og:url" content="http://vbbeat.com/index.php" />
    <link rel="stylesheet" type="text/css" href="../css/iconTable.css">
</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <iframe src="header.php" frameborder="0" width="100%"></iframe>
    </header>

    <!-- メイン部分 -->
    <main>
        <div class="iconTable">
            <div class="iconElement">
                <form method="get" name="category" action="articleList.php">
                    <input type=hidden name="category" value="member">
                    <a href="javascript:category.submit()" class="tac">
                        <div class="iconImage">
                            <img src="../img/icon_Member.png">
                        </div>
                        <div class="iconTitle">
                            Member
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="category" action="articleList.php">
                    <input type=hidden name="category" value="music">
                    <a href="javascript:category.submit()" class="tac">
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
                <form method="get" name="category" action="articleList.php">
                    <input type=hidden name="category" value="game">
                    <a href="javascript:category.submit()" class="tac">
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
                <form method="get" name="category" action="articleList.php">
                    <input type=hidden name="category" value="illust">
                    <a href="javascript:category.submit()" class="tac">
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
                <form method="get" name="category" action="articleList.php">
                    <input type=hidden name="category" value="novel">
                    <a href="javascript:category.submit()" class="tac">
                        <div class="iconImage">
                            <img src="../img/icon_Novel.png">
                        </div>
                        <div class="iconTitle">
                            Nobel
                        </div>
                    </a>
                </form>
            </div>
            <div class="iconElement">
                <form method="get" name="category" action="articleList.php">
                    <input type=hidden name="category" value="information">
                    <a href="javascript:category.submit()" class="tac">
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
        <iframe src="footer.php" frameborder="0" width="100%"></iframe>
    </footer>

</body>

</html>