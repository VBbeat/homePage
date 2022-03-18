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
			</tr>
			<?php for ($i = 0; $i < DECK_MAKE_CARDROW; $i++) : ?>
				<tr>
					<td class="cardTypeCol">
						<div class="cardType inputcol<?= ($i % 2) + 1 ?>">
							<select name="cardType">
								<option value="POKEMON">ポケモン</option>
								<option value="SUPPORT">サポート</option>
								<option value="GOODS">グッズ</option>
								<option value="STADIUM">スタジアム</option>
								<option value="ENERGY">エネルギー</option>
							</select>
							<!-- <?= CARD_TYPE_NAME[$deckContentList[0][CONTENT_CARD_TYPE]] ?> -->
						</div>
					</td>
					<td class="cardNameCol">
						<div class="cardName inputcol<?= ($i % 2) + 1 ?>">
							<input type="text" size="60%"/>
							<!-- <?= $deckContentList[0][CONTENT_CARD_NAME] ?> -->
						</div>
					</td>
					<td class="cardNumCol">
						<div class="cardNum inputcol<?= ($i % 2) + 1 ?>">
							<input type="number" min="1" max="30" />枚
							<!-- <?= $deckContentList[0][CONTENT_CARD_NUM] ?>枚 -->
						</div>
					</td>
				</tr>
			<?php endfor; ?>
        </table>
    </div>
</body>

</html>