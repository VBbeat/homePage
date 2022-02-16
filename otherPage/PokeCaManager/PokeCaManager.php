<?php
	$deckListArray = array();
	
	// デッキ一覧ファイルの読み込み
	$deckListArray[0] = array("001", "デッキ名1", "作成者名1", "更新日時1");
	$deckListArray[1] = array("002", "デッキ名2", "作成者名2", "更新日時2");
	$deckListArray[2] = array("003", "デッキ名3", "作成者名3", "更新日時3");
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
        <div class="commonButton">デッキ作成</div>
    </div>
    <div id="deckListArea">
        <table id="deckListTable">
			<?php for ($i = 0; $i < (count($deckListArray) + 1) / 2; $i += 2) : ?>
				<tr>
					<td>
						<div>
							<?= $deckListArray[$i][1] ?>
						</div>
					</td>
					<td>
						<?php if (count(deckListArray) > $i + 1) : ?>
						<div>
							<?= $deckListArray[$i + 1][1] ?>
						</div>
						<?php endif; ?>
					</td>
				</tr>
			<?php endfor; ?>
        </table>
    </div>
</body>

</html>