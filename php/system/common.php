<?php

function startSession($sessionId){
    if(is_null($sessionId)){
        session_start();
    }
}

function toLoginPage($userName, $lastPage){
    $_SESSION["lastPage"] = "php/" . $lastPage;
    if(!isset($userName)){
        return true;
    }
    return false;
}

function isMember($userName){
    $memberListPath = './data/master/loginUser.vbtx';
    if(is_readable($memberListPath)){
        $handle = fopen($memberListPath, 'r');

        while($name = fgets($handle)){
            $name = rtrim($name);
            if(strcmp($userName, $name) == 0){
                return true;
            }
        }
    }
    return false;
}

?>