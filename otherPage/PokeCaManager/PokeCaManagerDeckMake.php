<?php
    require_once "commonUtil.php";
	$deckContentArray = array();
	
	// デッキ詳細ファイルの読みこみ
	$deckFilePath = "./userData/deckData/" . $_GET["deckId"] . ".csv";
	$handle = fopen($deckFilePath, 'r');
	$idx = 0;
	while($deckCardInfoList = fgetcsv($handle)){
		$deckContentList[$idx][CONTENT_CARD_TYPE] = $deckCardInfoList[CONTENT_CARD_TYPE];
		$deckContentList[$idx][CONTENT_CARD_NAME] = $deckCardInfoList[CONTENT_CARD_NAME];
		$deckContentList[$idx][CONTENT_CARD_NUM] = $deckCardInfoList[CONTENT_CARD_NUM];
		$idx++;
	}
	fclose($handle);
?>
<html>

<head>
    <link rel="stylesheet" href="css/PokeCaManager.css" type="text/css">
    <link rel="stylesheet" href="../common.css" type="text/css">
	<script type="text/javascript" src="script/PokeCaManager.js"></script>
    <meta charset="utf-8" http-equiv="content-type">
</head>

<body>
    <header>
        <h1>簡易版ポケカデッキマネージャ</h1>
        <h3>ver 1.0</h3>
    </header>

    <div class="contentArea toolBarArea">
		<form method="post" name="deckRegistButton" action="PokeCaManager.php">
			<input type=hidden name="deckId" value="<?= $_GET["deckId"] ?>">
        	<a href="javascript:deckMakeButton.submit()" >
				<div class="commonButton">デッキ保存</div>
			</a>
		</form>
    </div>
    <div id="deckCreateArea" class="contentArea">
        <table class="deckCreateTable" id="createTableId">
			<tr>
				<td class="cardTypeCol">
					<div class="cardType headerCol">種類</div>
				</td>
				<td class="cardNameCol">
					<div class="cardName headerCol">カード名</div>
				</td>
				<td class="cardNumCol">
					<div class="cardNum headerCol">枚数</div>
				</td>
<<<<<<< HEAD
=======
				<td class="editButtonCol">
					<div class="editButton headerCol">
						編集ボタン
					</div>
				</td>
>>>>>>> 04a11cd14689e942ac0f967fa0a54a6baf6422ff
			</tr>
			<!-- ここをfor -->
			<tr>
				<td class="cardTypeCol">
					<div class="cardType <?= CARD_COL_NAME[$deckContentList[0][CONTENT_CARD_TYPE]] ?>">
						<?= CARD_TYPE_NAME[$deckContentList[0][CONTENT_CARD_TYPE]] ?>
					</div>
				</td>
				<td class="cardNameCol">
					<div class="cardName <?= CARD_COL_NAME[$deckContentList[0][CONTENT_CARD_TYPE]] ?>">
						<?= $deckContentList[0][CONTENT_CARD_NAME] ?>
					</div>
				</td>
				<td class="cardNumCol">
					<div class="cardNum <?= CARD_COL_NAME[$deckContentList[0][CONTENT_CARD_TYPE]] ?>">
						<?= $deckContentList[0][CONTENT_CARD_NUM] ?>枚
					</div>
				</td>
<<<<<<< HEAD
=======
				<td class="editButtonCol">
					<div class="commonButton" onclick="editRow(this)" value="編集">編集</div>
				</td>
>>>>>>> 04a11cd14689e942ac0f967fa0a54a6baf6422ff
			</tr>
			<!-- ここまてfor -->
        </table>
    </div>
</body>

</html>