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
        <iframe src="header.php" frameborder="0" width="100%"></iframe>
    </header>

    <!-- メイン部分 -->
    <main>
        <form action="#" method="post">
            <div class="window">
                <div class="windowHeader">
                    <div class="windowTitle">
                        <span class="windowIcon">■</span>記事投稿フォーム
                    </div>
                    <a href="articleList.php" class="tac">
                        <span class="toArticleListButton">×</span>
                    </a>
                </div>
                <div class="windowContent">
                    <ul class="postItemList">
                        <li class="postItem">
                            <input type="text" name="postTitle" placeholder="ここにタイトルを入力">
                        </li>
                        <li class="postItem">
                            <input type="text" name="postName" placeholder="ここに投稿者名を入力">
                        </li>
                        <li>
                            <textarea name="postContent" rows="10" cols="40">ここに記事内容を入力</textarea>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    </main>
    <!-- フッタ部分 -->
    <footer>
        <iframe src="footer.php" frameborder="0" width="100%"></iframe>
    </footer>
</body>

</html>