<?php

    const CARD_TYPE_POKEMON = 0;
    const CARD_TYPE_SUPPORT = 1;
    const CARD_TYPE_GOODS = 2;
    const CARD_TYPE_STADIUM = 3;
    const CARD_TYPE_ENERGY = 4;

    const CONTENT_CARD_TYPE = 0;
    const CONTENT_CARD_NAME = 1;
    const CONTENT_CARD_NUM = 2;

    const DECK_ID = 0;
    const DECK_NAME = 1;
    const DECK_MAKER = 2;
    const DECK_UPDDATE = 3;
    const DECK_DELETE = 4;

    const ISDELETE = 1;
    
    const DECK_MAKE_CARDROW = 30;
    const CARD_TYPE_NAME = array("ポケモン", "サポート", "グッズ", "スタジアム", "エネルギー");
    const CARD_TYPE_VALUE = array("pokemon", "support", "goods", "stadium", "energy");

    const TITLE = "title";
    const VERSION = "version";

    function getSystemInfo($infoKey){
        $systemInfoJson = json_decode(file_get_contents("./masterData/systemMaster.json"), true);
        return $systemInfoJson[$infoKey];
    }

    function registDeck($cardDataArray, $deckId, $deckName, $deckMaker, $isEdit){
        $deckFilePath_deckDist = "./userData/deckData/" . $deckId . ".csv";
        $handle_deckDist = fopen($deckFilePath_deckDist, 'w+');

        for($i = 0; $i < count(CARD_TYPE_VALUE); $i++){
            for($j = 0; $j < count($cardDataArray); $j++){
                // カードのタイプをそろえて処理
                if($cardDataArray[$j][CONTENT_CARD_TYPE] == CARD_TYPE_VALUE[$i]){
                    // 入力が正しくされている場合
                    if(
                        isset($cardDataArray[$j][CONTENT_CARD_NAME])
                        && mb_strlen($cardDataArray[$j][CONTENT_CARD_NAME]) != 0
                        && isset($cardDataArray[$j][CONTENT_CARD_NUM])
                        && (intval($cardDataArray[$j][CONTENT_CARD_NUM]) > 0)
                    ){
                        fwrite(
                            $handle_deckDist,
                            $cardDataArray[$j][CONTENT_CARD_TYPE] . "," .
                            $cardDataArray[$j][CONTENT_CARD_NAME] . "," .
                            $cardDataArray[$j][CONTENT_CARD_NUM] . "\n"
                        );
                    }
                }
            }
        }
        $result_deckDist = fclose($handle_deckDist);

        $deckFilePath_deckList = "./userData/deckList.csv";
        $handle_deckList = fopen($deckFilePath_deckList, 'r');
        $deckInfoList = array();
        $index = 0;
        while($deckInfo = fgetcsv($handle_deckList)):
            $deckInfoList[$index++] = $deckInfo;
        endwhile;
        fclose($handle_deckList);

        $deckFilePath_deckList_new = "./userData/deckList_new.csv";
        $handle_deckList_new = fopen($deckFilePath_deckList_new, 'w+');
        for($i = 0; $i < count($deckInfoList); $i++){
            if($i + 1 == $deckId){
                $deckInfoList[$i][DECK_NAME] = $deckName;
                $deckInfoList[$i][DECK_MAKER] = $deckMaker;
                $deckInfoList[$i][DECK_UPDDATE] = date("Y/m/d");
            }
            fputcsv($handle_deckList_new, $deckInfoList[$i]);
        }
        if(count($deckInfoList) + 1 == $deckId){
            fwrite(
                $handle_deckList_new,
                $deckId . "," .
                $deckName . "," .
                $deckMaker . "," .
                date("Y/m/d") . "," .
                "0\n"
            );
        }
        $result_deckList = fclose($handle_deckList_new);

        unlink($deckFilePath_deckList);
        rename($deckFilePath_deckList_new, $deckFilePath_deckList);

        return ($result_deckList && $result_deckDist);
    }
?>