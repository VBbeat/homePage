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
            <?php
            //カテゴリをカテゴリマスタから取得する
            $ctgrMstFilePath = '../data/master/mst_category.vbtx';
            $handle = fopen($ctgrMstFilePath, 'r');
            while(!feof($handle)):
                $categoryInfoList = explode(',', fgets($handle));
                $categoryName_caps = $categoryInfoList[0];
                $categoryName_smal = $categoryInfoList[1];
                $category_exp = $categoryInfoList[2];
            ?>
                <div class="iconElement">
                    <form method="get" name="<?= $categoryName_smal ?>" action="articleList.php">
                        <input type=hidden name="category" value="<?= $categoryName_smal ?>">
                        <a href="<?= 'javascript:' . $categoryName_smal . '.submit()' ?>" class="tac">
                            <table class="contentTable">
                                <tr>
                                    <td class="contentIconElm">
                                        <div class="contentIcon tac">
                                            <div class="iconImage">
                                                <img src="<?= '../img/icon_' . $categoryName_caps . '.png' ?>">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="contentAbstElm">
                                            <div class="contentAbst">
                                                <?= trim($category_exp) . 'を記載しています。' ?>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </a>
                    </form>
                </div>
            <?php
            endwhile;
            fclose($handle);
            ?>

        </div>
    </main>

    <!-- フッタ部分 -->
    <footer>
        <?php include('footer.php'); ?>
    </footer>

</body>

</html>