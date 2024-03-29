<?php

function startSession($sessionId){
    if(is_null($sessionId)){
        session_start();
    }
}

function toLoginPage($userName, $lastPage){
    $_SESSION["lastPage"] = "php/" . $lastPage;
    if(!isset($userName) || $userName == ''){
        return true;
    }
    return false;
}

function isMember($userName){
    $memberListPath = './data/master/loginUser.vbtx';
    if(is_readable($memberListPath)){
        $handle = fopen($memberListPath, 'r');

        while($userData = fgets($handle)){
            $userDataArray = explode(",", $userData);
            if(strcmp($userDataArray[0], $userName) == 0){
                $_SESSION["userName"] = rtrim($userDataArray[1]);
                return true;
            }
        }
    }
    return false;
}

function isLogin(){
    if($_SESSION["isMemberLogin"]){
        return true;
    }
    return false;
}

function getTitle(){
    $titleMstPath = './data/master/title_and_version.vbtx';
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