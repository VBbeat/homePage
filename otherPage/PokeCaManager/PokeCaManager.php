<?php
    require_once "commonUtil.php";

    // デッキ作成画面から遷移した場合
    if (isset($_POST["isRegisted"])){
        registDeck($_POST["cardData"], $_SESSION["deckId_Max"], $_POST["deckName"], $_POST["deckMaker"]);
    }

    // デッキ名, 投稿者, 更新日時を取得する
    $deckPath = './userData/deckData/deckList.csv';
    foreach(glob($deckPath) as $deckFile){
        $handle = fopen($deckFile, 'r');
        $deckInfo = fgets($handle);
        $deckName = fgets($handle);
        $updDateTime = fgets($handle);
        $poster = fgets($handle);
        array_push($articleTitle, $title);
        array_push($articlePathList, $articleFile);
        array_push($articleUpdDateTime, $updDateTime);
        array_push($articlePoster, $poster);
        fclose();
    }

?>
<html>

<head>
    <link rel="stylesheet" href="css/PokeCaManager.css" type="text/css">
    <link rel="stylesheet" href="../common.css" type="text/css">
    <meta charset="utf-8" http-equiv="content-type">
</head>

<body>
    <header>
        <h1>簡易版ポケカデッキマネージャ</h1>
        <h3>ver 1.0</h3>
    </header>

    <div class="contentArea toolBarArea">
        <a href="PokeCaManagerDeckMake.php">
            <div class="commonButton">デッキ作成</div>
        </a>
    </div>
    <div id="deckListArea" class="contentArea">
		<?php
            $_SESSION["deckId_Max"] = 0;
            $deckPath = './userData/deckList.csv';
            $handle = fopen($deckPath, 'r');
            while($deckInfoList = fgetcsv($handle)):
        ?>
            <?php
                if($deckInfoList[DECK_DELETE] != ISDELETE):
            ?>
                <form method="get" name="<?= 'deckId' . $deckInfoList[DECK_ID] ?>" action="PokeCaManagerDeckDist.php">
                    <input type=hidden name="deckId" value="<?= $deckInfoList[DECK_ID] ?>">
                    <a href="<?= 'javascript:deckId' . $deckInfoList[DECK_ID] . '.submit()' ?>" action="PokeCaManagerDeckDist.php">
                        <table class="deckListTable">
                            <tr>
                                <td class="deckNameCol">
                                    <div class="deckName">
                                        デッキ名：<?= $deckInfoList[DECK_NAME] ?>
                                    </div>
                                </td>
                                <td class="deckInfoCol">
                                </td>
                            </tr>
                            <tr>
                                <td class="deckNameCol">
                                    <div class="deckMaker">
                                        作成者　：<?= $deckInfoList[DECK_MAKER] ?>
                                    </div>
                                </td>
                                <td class="deckInfoCol">
                                    <div class="deckUpdDate tar">
                                        更新日：<?= $deckInfoList[DECK_UPDDATE] ?>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </a>
                </form>
            <?php
                // 最大のデッキIDをセッション変数で保持
                $_SESSION["deckId_Max"] = max($deckInfoList[DECK_ID], $_SESSION["deckId_Max"]);
                endif;
            ?>
        <?php
            endwhile;
            fclose($handle);
        ?>
    </div>
</body>

</html>