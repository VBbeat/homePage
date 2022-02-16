<?php
	$deckContentArray = array();
	
	// デッキ詳細ファイルの読み込み
	$deckContentArray[0] = array(0,
	"ラプラスV", 3);
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

    <script type="text/javascript" src="script/Variables.js"></script>
</head>

<body>
    <header>
        <h1>簡易版ポケカデッキマネージャ</h1>
        <h3>ver 1.0</h3>
    </header>

    <div id="userIdForm" class="contentArea">
        <div class="commonButton">デッキ編集</div>
    </div>
    <div id="deckContentArea">
        <table id="deckContentTable">
			<?php for ($i = 0; $i < (count($deckContentArray) + 1) / 2; $i += 2) : ?>
				<tr>
					<td>
						<div>
							<?= $deckContentArray[$i][1] ?>
						</div>
						<div>
						    <?= $deckContentArray[$i][2] ?>
						</div>
					</td>
					<td>
						<?php if (count(deckContentArray) > $i + 1) : ?>
						<div>
							<?= $deckContentArray[$i + 1][1] ?>
						</div>
						<div>
							<?= $deckContentArray[$i + 1][2] ?>
						</div>
						<?php endif; ?>
					</td>
				</tr>
			<?php endfor; ?>
        </table>
    </div>
</body>

</html>