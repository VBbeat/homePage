<?php
    require_once "system/common.php";
?>

<head>
    <script type="text/javascript" src="../scripts/footerClock.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/common.css">
    <link rel="stylesheet" type="text/css" href="../css/footer.css">
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
                <form method="post" name="newArticle" action="articlePostForm.php">
                    <input type="hidden" name="newArticle" value="1">
                    <a href="javascript:newArticle.submit()" target="_parent">
                        <div>
                            <img src="../img/footer_Article.png">
                        </div>
                    </a>
                </form>
            </span>
        <?php endif ?>
        <?php if(isset($_SESSION["isMemberLogin"])) : ?>
            <span class="footerButton">
                <a href="masterEdit.php" target="_parent">
                    <div>
                        <img src="../img/footer_Setting.png">
                    </div>
                </a>
            </span>
        <?php endif ?>
    </div>
    <div class="footerElementRight">
        <span class="footerButton">
            <a href="../index.php" target="_parent">
                <div>
                    <img src="../img/footer_Login.png">
                </div>
            </a>
        </span>
        <?php if(isset($_SESSION["userName"])) : ?>
            <span id="userName" class="footerRightIcon">Login User<br><?= $_SESSION["userName"] ?></span>
        <?php endif ?>
    </div>
</div>