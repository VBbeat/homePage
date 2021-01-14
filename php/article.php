<?php
    //各フラグ変数
    $failLoadArticle = false;
    $noArticle = false;

    //不正アクセス防止
    if(is_null($_SESSION["category"]) || !isset($_GET["article"])){
        $articlePath = '';
        $failLoadArticle = true;
    }else{
        if(isset($_GET["category"])){
            $_SESSION["category"] = $_GET["category"];
        }
        $articlePath = '../data/article/' . $_SESSION["category"] . '/' . strval($_GET["article"] + 1) . '.vbtx';

    }

    //ファイルが読み取れるか確認
    if(is_readable($articlePath)){

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
        $noArticle = true;
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
        <iframe src="header.php" frameborder="0" width="100%"></iframe>
    </header>

    <!-- メイン部分 -->
    <main>
        <?php if($failLoadArticle) : ?>
            <p>記事の読み込みに失敗しました。</p>
        <?php elseif($noArticle) : ?>
            <p>該当の記事は存在しません。</p>
            <p><?= $articlePath ?></p>
            <p><?= $_SESSION["category"] ?></p>
        <?php else : ?>
            <div class="window">
                <div class="windowHeader">
                    <div class="windowTitle">
                        <span class="windowIcon">■</span><?= $title ?>
                    </div>
                    <a href="articleList.php" class="tac">
                        <span class="backButton">×</span>
                    </a>
                </div>
                <div class="windowContent">
                    <p>投稿者：<?= $userName ?></p>
                    <p>投稿日時：<?= $date ?></p>
                    <hr>
                    <p>
                        <?php
                            foreach($content as $line){
                                echo $line;
                                echo '<br>';
                            }
                        ?>
                    </p>
                </div>
            </div>
        <?php endif; ?>
    </main>
    <!-- フッタ部分 -->
    <footer>
        <iframe src="footer.php" frameborder="0" width="100%"></iframe>
    </footer>
</body>

</html>