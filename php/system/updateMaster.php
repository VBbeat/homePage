<?php

function updateMaster(){
    $titleMstPath = '../data/master/title_and_version.vbtx';
    if(is_readable($titleMstPath)){
        $handle = fopen($titleMstPath, 'r');
        $_SESSION["siteTitle"] = fgets($handle);
        $_SESSION["version"] = fgets($handle);

        fclose($handle);
        return true;
    }
    return false;
}

?>