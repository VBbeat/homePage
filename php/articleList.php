<?php
    //各フラグ変数
    $failLoadCategory = false;
    $noCategory = false;

    //カテゴリを取得する
    if(isset($_GET["category"])){
        $_SESSION["category"] = $_GET["category"];
    }elseif(!isset($_SESSION["category"])){
        $failLoadCategory = true;
        $_SESSION["category"] = '';
    }

    //取得したカテゴリの記事のタイトルを取得する
    //記事がない場合はその旨を表示
    $articlePath = '../data/article/' . $_SESSION["category"] . '/*.vbtx';
    $articleTitle = array();
    foreach(glob($articlePath) as $articleFile){
        $handle = fopen($articleFile, 'r');
        $title = fgets($handle);
        array_push($articleTitle, $title);
        fclose($handle);
    }

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
        <!-- 記事がない場合 -->
        <?php if($noCategory) : ?>
            <p>該当のカテゴリは存在しません。</p>
        <?php elseif($failLoadCategory) : ?>
            <p>カテゴリの読み込みに失敗しました。</p>
        <?php elseif(count($articleTitle) == 0) : ?>
            <p>まだ記事が投稿されていません。</p>
        <?php else : ?>
            <div class="iconTable">
                <?php foreach($articleTitle as $index => $title) : ?>
                    <div class="iconElement">
                        <form method="get" name="<?= 'art' . $index ?>" action="article.php">
                            <input type=hidden name="article" value="<?= $index ?>">
                            <a href="<?= 'javascript:art' . $index . '.submit()' ?>" class="tac">
                                <div class="iconImage">
                                    <img src="../img/icon_article.png">
                                </div>
                                <div class="iconTitle">
                                    <?= $title ?>
                                </div>
                            </a>
                        </form>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </main>

    <!-- フッタ部分 -->
    <footer>
        <iframe src="footer.php" frameborder="0" width="100%"></iframe>
    </footer>

</body>

</html>