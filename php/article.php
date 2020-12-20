<?php
    $articlePath = '../data/article/' . $_SESSION["category"] . '/1.vbtx';

    //ファイルが読み取れるか確認
    if( is_readable($articlePath)){

        //ファイルを開く
        $handle = fopen($articlePath, 'r');

        //データを取得する
        //タイトルを取得する
        $title = fgets($handle);

        //投稿日時を取得する
        $date = fgets($handle);

        //編集者名を取得する
        $userName = fgets($handle);

        //タグを取得する
        $tags = fgetcsv($handle);

        //記事を取得する
        $content = array();
        while($data = fgets($handle)){
            array_push($content, $data);
        }

        //ファイルを閉じる
        fclose($handle);
    }else{
        echo 'blah.';
    }
?>

<html>

<head>
    <!-- 共通したメタタグの読み込み -->
    <script type="text/javascript" src="../scripts/head.js"></script>

    <!-- 各ページ固有のタグの読み込み -->
    <meta property="og:url" content="http://vbbeat.com/article.php" />
    <link rel="stylesheet" type="text/css" href="../css/article.css">
</head>

<body>

    <!-- ヘッダ部分 -->
    <header>
        <iframe src="header.php" frameborder="0" width="100%"></iframe>
    </header>

    <!-- メイン部分 -->
    <main>
        <div class="article">
            <div class="articleHeader">
                <div class="articleTitle">
                    <span class="articleIcon">■</span><?php echo $title; ?>
                </div>
                <a href="articleList.php" class="tac">
                    <span class="toArticleListButton">×</span>
                </a>
            </div>
            <div class="articleContent">
                <?php
                    foreach($content as $line){
                        echo $line;
                        echo '<br>';
                    }
                ?>
            </div>
        </div>
    </main>
    <!-- フッタ部分 -->
    <footer>
        <iframe src="footer.php" frameborder="0" width="100%"></iframe>
    </footer>
</body>

</html>