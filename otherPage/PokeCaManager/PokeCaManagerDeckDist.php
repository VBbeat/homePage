<?php
    require_once "commonUtil.php";
	$deckContentArray = array();
	
	// デッキ詳細ファイルの読み込み
	$deckContentArray[0] = array(0, "そらをとぶピカチュウVMAX", 3);
	$deckContentArray[1] = array(1, "ダンデ", 3);
	$deckContentArray[2] = array(2, "クイックボール", 4);
	$deckContentArray[3] = array(3, "崩れたスタジアム", 2);
	$deckContentArray[4] = array(4, "基本水E", 12);
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
			<div class="commonButton">デッキ編集</div>
		</a>
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
			<?php for ($i = 0; $i < (count($deckContentArray) + 1); $i += 2) : ?>
				<tr>
					<td class="cardNameCol">
						<div class="cardName <?= CARD_COL_NAME[$deckContentArray[$i][0]] ?>">
							<?= $deckContentArray[$i][2] ?>
						</div>
					</td>
					<td class="cardNumCol">
						<div class="cardNum <?= CARD_COL_NAME[$deckContentArray[$i][0]] ?>">
						    <?= $deckContentArray[$i][2] ?>
						</div>
					</td>
					<td class="cardNameCol">
						<?php if (count($deckContentArray) > $i + 1) : ?>
						<div class="cardName <?= CARD_COL_NAME[$deckContentArray[$i + 1][0]] ?>"><?= $deckContentArray[$i + 1][2] ?></div>
						<?php endif; ?>
					</td>
					<td class="cardNumCol">
						<?php if (count($deckContentArray) > $i + 1) : ?>
						<div class="cardNum <?= CARD_COL_NAME[$deckContentArray[$i + 1][0]] ?>"><?= $deckContentArray[$i + 1][2] ?></div>
						<?php endif; ?>
					</td>
				</tr>
			<?php endfor; ?>
        </table>
    </div>
</body>

</html>