<?php
    require_once "system/common.php";
?>

<html>

<head>
    <script type="text/javascript" src="../scripts/footerClock.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/common.css">
    <style type="text/css">
        body {
            width: 100%;
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
            width: 80px;
            margin: 12px;
            
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

    </style>
</head>

<!--フッタ-->

<body>
    <div class="footerElementLeft">
        <span class="footerButton">
            <a href="home.php" target="_parent">
                <div>
                    <img src="../img/footer_Home.png">
                </div>
            </a>
        </span>
        <?php if(isset($_SESSION["isMemberLogin"])) { ?>
            <span class="footerButton">
                <a href="articlePostForm.php" target="_parent">
                    <div>
                        <img src="../img/footer_Article.png">
                    </div>
                </a>
            </span>
        <?php } ?>
    </div>
    <div class="footerElementRight">
        <div id="footerClock"></div>
    </div>
</body>

</html>