<?php
    require_once "commonUtil.php";
	$deckListArray = array();
	
	// デッキ一覧ファイルの読み込み
	$deckListArray[0] = array("001", "好きなモノ入ってますデッキ", "むりこ", "2022/02/17");
	$deckListArray[1] = array("002", "バトルセンスリザードンデッキ", "すみこ", "2022/02/17");
	$deckListArray[2] = array("003", "れんげきウーラオスVMAXデッキ", "わっさん", "2022/02/17");
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
		<?php for ($i = 0; $i < count($deckListArray); $i++) : ?>
            <a href="PokeCaManagerDeckDist.php">
                <table class="deckListTable">
                    <tr>
                        <td class="deckNameCol">
                            <div class="deckName">
                                デッキ名：<?= $deckListArray[$i][1] ?>
                            </div>
                        </td>
                        <td class="deckInfoCol">
                        </td>
                    </tr>
                    <tr>
                        <td class="deckNameCol">
                            <div class="deckMaker">
                                作成者　：<?= $deckListArray[$i][2] ?>
                            </div>
                        </td>
                        <td class="deckInfoCol">
                            <div class="deckUpdDate tar">
                                更新日：<?= $deckListArray[$i][3] ?>
                            </div>
                        </td>
                    </tr>
                </table>
            </a>
        <?php endfor; ?>
    </div>
</body>

</html>