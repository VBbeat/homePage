<?php
    require_once "commonUtil.php";
	$deckContentList = array();

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
		<form method="get" name="deckMakeButton" action="PokeCaManagerDeckMake.php">
			<input type=hidden name="deckId" value="<?= $_GET["deckId"] ?>">
			<input type=hidden name="deckName" value="<?= $_GET["deckName"] ?>">
			<input type=hidden name="deckMaker" value="<?= $_GET["deckMaker"] ?>">
        	<a href="javascript:deckMakeButton.submit()" >
				<div class="commonButton">デッキ編集</div>
			</a>
		</form>
		<form>
			<a href="PokeCaManager.php" >
				<div class="commonButton">デッキ一覧</div>
			</a>
		</form>
    </div>
    <div id="deckContentArea" class="contentArea">
        <table id="deckContentTable">
			<tr>
				<td class="cardNameCol">
					<div class="cardName headerCol">カード名</div>
				</td>
				<td class="cardNumCol">
					<div class="cardNum headerCol">枚数</div>
				</td>
				<td class="cardNameCol">
					<div class="cardName headerCol">カード名</div>
				</td>
				<td class="cardNumCol">
					<div class="cardNum headerCol">枚数</div>
				</td>
			</tr>
			<?php for ($i = 0; $i < (count($deckContentList) + 1); $i += 2) : ?>
				<tr>
					<td class="cardNameCol">
						<div class="cardName <?= $deckContentList[$i][CONTENT_CARD_TYPE] ?>Col">
							<?= $deckContentList[$i][CONTENT_CARD_NAME] ?>
						</div>
					</td>
					<td class="cardNumCol">
						<div class="cardNum <?= $deckContentList[$i][CONTENT_CARD_TYPE] ?>Col">
						    <?= $deckContentList[$i][CONTENT_CARD_NUM] ?>枚
						</div>
					</td>
					<td class="cardNameCol">
						<?php if (count($deckContentList) > $i + 1) : ?>
						<div class="cardName <?= $deckContentList[$i + 1][CONTENT_CARD_TYPE] ?>Col">
							<?= $deckContentList[$i + 1][CONTENT_CARD_NAME] ?>
						</div>
						<?php endif; ?>
					</td>
					<td class="cardNumCol">
						<?php if (count($deckContentList) > $i + 1) : ?>
						<div class="cardNum <?= $deckContentList[$i + 1][CONTENT_CARD_TYPE] ?>Col">
							<?= $deckContentList[$i + 1][CONTENT_CARD_NUM] ?>枚
						</div>
						<?php endif; ?>
					</td>
				</tr>
			<?php endfor; ?>
        </table>
    </div>
</body>

</html>