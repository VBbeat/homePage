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

    const CARD_COL_NAME = array("pokemonCol", "supportCol", "goodsCol", "stadiumCol", "energyCol");
    const CARD_TYPE_NAME = array("ポケモン", "サポート", "グッズ", "スタジアム", "エネルギー");
    const CARD_TYPE_VALUE = array("pokemon", "support", "goods", "stadium", "energy");

    function registDeck($cardDataArray, $deckId){
        $deckFilePath = "./userData/deckData/" . $deckId . ".csv";
        $handle = fopen($deckFilePath, 'w+');

        for($i = 0; $i < count(CARD_TYPE_VALUE); $i++){
            for($j = 0; $j < count($cardDataArray); $j++){
                if($cardDataArray[$j][CONTENT_CARD_TYPE] == CARD_TYPE_VALUE[$i]){
                    echo 
                    fwrite(
                        $handle,
                        $cardDataArray[$j][CONTENT_CARD_TYPE] . "," .
                        $cardDataArray[$j][CONTENT_CARD_NAME] . "," .
                        $cardDataArray[$j][CONTENT_CARD_NUM]
                    );
                }
            }
        }
        $result = fclose($handle);

        return $result;
    }
?>