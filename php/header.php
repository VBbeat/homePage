
<?php 
    require_once "system/common.php";
    echo getTitle();
?>

<head>
    <link rel="stylesheet" type="text/css" href="../css/common.css">
    <style type="text/css">

        #title{
            color: black;
            margin: 0 auto;

            font-size: 36px;
        }

        #version{
            font-size: 24px
        }
        
        /* タブレット用 */
        @media screen and (max-width: 959px) {
            #title{
                font-size: 24px;
            }

            #version{
                font-size: 18px
            }
        }

        /* スマホ用 */
        @media screen and (max-width: 480px) {
            #title{
                font-size: 18px;
            }

            #version{
                font-size: 15px
            }
        }

    </style>
</head>

<!-- ヘッダ -->
<div id="title">
    <h1><?= $_SESSION["siteTitle"] ?></h1>
    <div id="version">version <?= $_SESSION["version"] ?></div>
</div>