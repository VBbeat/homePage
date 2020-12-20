<?php
    $_SESSION["category"] = $_GET["category"];
?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="../scripts/head.js"></script>

    <!-- 各ページ固有のタグの読み込み -->
    <meta property="og:url" content="http://vbbeat.com/articleList.php" />
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
                <a href="article.php" class="tac">
                    <div class="iconImage">
                        <img src="../img/icon_article.png">
                    </div>
                    <div class="iconTitle">
                        テスト1
                    </div>
                </a>
            </div>
            <div class="iconElement">
                <a href="article.php" class="tac">
                    <div class="iconImage">
                        <img src="../img/icon_article.png">
                    </div>
                    <div class="iconTitle">
                        テスト2
                    </div>
                </a>
            </div>
        </div>
    </main>

    <!-- フッタ部分 -->
    <footer>
        <iframe src="footer.php" frameborder="0" width="100%"></iframe>
    </footer>

</body>

</html>