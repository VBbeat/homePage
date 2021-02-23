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

?>