<?php
    require_once "system/common.php";
?>

<head>
    <script type="text/javascript" src="../scripts/footerClock.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/common.css">
    <style type="text/css">
        #footer {
            background-color: #DEFEDE;
            color: black;

            display: flex;
            flex-direction: row;
            justify-content: space-between;

        }

        .footerElementLeft {
            width: 200px;
            margin: 12px;

            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

        /* フッタのボタンの設定 */
        .footerButton {
            width: 64px;
            display: inline-block;
        }

        /* 右下の時計の設定 */
        .footerElementRight {
            margin: 12px;
            
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .footerRightIcon{
            width: 80px;
            display: inline-block;
        }

        #userName{
            width: 100px;
        }

    </style>
</head>

<!--フッタ-->
<div id="footer">
    <div class="footerElementLeft">
        <span class="footerButton">
            <a href="home.php" target="_parent">
                <div>
                    <img src="../img/footer_Home.png">
                </div>
            </a>
        </span>
        <?php if(isset($_SESSION["isMemberLogin"])) : ?>
            <span class="footerButton">
                <form method="post" name="artPost" action="articlePostForm.php">
                    <input type="hidden" name="newArticle" value="1">
                    <a href="articlePostForm.php" target="_parent">
                        <div>
                            <img src="../img/footer_Article.png">
                        </div>
                    </a>
                </form>
            </span>
        <?php endif ?>
    </div>
    <div class="footerElementRight">
        <?php if(isset($_SESSION["userName"])) : ?>
            <span id="userName" class="footerRightIcon">Login User<br><?= $_SESSION["userName"] ?></span>
        <?php endif ?>
        <span id="footerClock" class="footerRightIcon"></span>
    </div>
</div>