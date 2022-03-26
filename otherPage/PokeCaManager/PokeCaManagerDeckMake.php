<?php
    require_once "commonUtil.php";
	$deckContentArray = array();
	$deckMaker = "";
	$deckName = "";
	$deckId = "";
	
	// デッキ詳細ファイルの読みこみ
	if(isset($_GET["deckId"]) && $_GET["deckId"] != ""){
		$deckFilePath = "./userData/deckData/" . $_GET["deckId"] . ".csv";
		$handle = fopen($deckFilePath, 'r');
		$idx = 0;
		while($deckCardInfoList = fgetcsv($handle)){
			$deckContentList[$idx][CONTENT_CARD_TYPE] = $deckCardInfoList[CONTENT_CARD_TYPE];
			$deckContentList[$idx][CONTENT_CARD_NAME] = $deckCardInfoList[CONTENT_CARD_NAME];
			$deckContentList[$idx][CONTENT_CARD_NUM] = $deckCardInfoList[CONTENT_CARD_NUM];
			$idx++;
		}
		$deckMaker = $_GET["deckMaker"];
		$deckName = $_GET["deckName"];
		$deckId = $_GET["deckId"];
		fclose($handle);
	}
?>
<html>

<head>
    <link rel="stylesheet" href="css/PokeCaManager.css" type="text/css">
    <link rel="stylesheet" href="../common.css" type="text/css">
	<script type="text/javascript" src="./script/commonUtil.js"></script>
    <meta charset="utf-8" http-equiv="content-type">
</head>

<body>
    <header>
        <h1>簡易版ポケカデッキマネージャ</h1>
        <h3>ver 1.0</h3>
    </header>

	<form method="post" name="deckRegistButton" action="PokeCaManager.php">
		<div class="contentArea toolBarArea">
			<input type="hidden" name="isRegisted" value="<?= TRUE ?>">
			<input type="hidden" name="deckId" value="<?= $deckId ?>">
			<a href="javascript:deckRegistButton.submit()" >
				<div class="commonButton">デッキ保存</div>
			</a>
		</div>
		<div id="deckCreateArea" class="contentArea">
			<table class="deckDistInfoTable">
				<tr>
					<td>
						<div class="deckName headerCol">デッキ名</div>
					</td>
					<td>
						<div class="deckMaker headerCol">デッキ作成者</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="deckName inputCol1">
							<input type="text" name="deckName" size="30%" value="<?= $deckName ?>" />
						</div>
					</td>
					<td>
						<div class="deckMaker inputCol1">
							<input type="text" name="deckMaker" size="40%" value="<?= $deckMaker ?>" />
						</div>
					</td>
				</tr>
			</table>

			<table class="deckCreateTable" id="createTableId">
				<tr>
					<td class="cardTypeCol">
						<div class="cardType headerCol">種類</div>
					</td>
					<td class="cardNameCol">
						<div class="cardName headerCol">カード名</div>
					</td>
					<td class="cardNumCol">
						<div class="cardNum headerCol">現在：<span id="cardNumTotal">0</span>枚</div>
					</td>
				</tr>
				<?php for ($i = 0; $i < DECK_MAKE_CARDROW; $i++) : ?>
					<tr>
						<td class="cardTypeCol">
							<div class="cardType inputcol<?= ($i % 2) + 1 ?>">
								<select name="cardData[<?= $i ?>][<?= CONTENT_CARD_TYPE ?>]">
									<option value="pokemon"
									<?php if(
										(isset($deckContentList[$i]) && $deckContentList[$i][CONTENT_CARD_TYPE] == "pokemon")
										|| !isset($deckContentList[$i])
										) :
									?>
										selected
									<?php endif; ?>
									>ポケモン</option>
									<option value="support"
									<?php if(
										(isset($deckContentList[$i]) && $deckContentList[$i][CONTENT_CARD_TYPE] == "support")
										) :
									?>
										selected
									<?php endif; ?>
									>サポート</option>
									<option value="goods"
									<?php if(
										(isset($deckContentList[$i]) && $deckContentList[$i][CONTENT_CARD_TYPE] == "goods")
										) :
									?>
										selected
									<?php endif; ?>
									>グッズ</option>
									<option value="stadium"
									<?php if(
										(isset($deckContentList[$i]) && $deckContentList[$i][CONTENT_CARD_TYPE] == "stadium")
										) :
									?>
										selected
									<?php endif; ?>
									>スタジアム</option>
									<option value="energy"
									<?php if(
										(isset($deckContentList[$i]) && $deckContentList[$i][CONTENT_CARD_TYPE] == "energy")
										) :
									?>
										selected
									<?php endif; ?>
									>エネルギー</option>
								</select>
							</div>
						</td>
						<td class="cardNameCol">
							<div class="cardName inputcol<?= ($i % 2) + 1 ?>">
								<input type="text" name="cardData[<?= $i ?>][<?= CONTENT_CARD_NAME ?>]" size="60%" 
								<?php if(isset($deckContentList[$i])) : ?>
									value="<?= $deckContentList[$i][CONTENT_CARD_NAME] ?>"
								<?php endif; ?>
								/>　
							</div>
						</td>
						<td class="cardNumCol">
							<div class="cardNum inputcol<?= ($i % 2) + 1 ?>">
								<input type="number" id="cardNum_<?= $i ?>" name="cardData[<?= $i ?>][<?= CONTENT_CARD_NUM ?>]" min="1" max="30" onchange="calcTotal();"
								<?php if(isset($deckContentList[$i])) : ?>
									value="<?= $deckContentList[$i][CONTENT_CARD_NUM] ?>"
								<?php else : ?>
									value="0"
								<?php endif; ?>
								/>枚
							</div>
						</td>
					</tr>
				<?php endfor; ?>
			</table>
		</div>	
	</form>
</body>

</html>