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

        .footerElement {
            width: 10ex;
            margin: 1ex;

            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        /* フッタのホームボタンの設定 */
        #footerHome {
            width: 64px;
        }
    </style>
</head>

<!--フッタ-->

<body>
    <div class="footerElement">
        <a href="index.php" target="_parent">
            <div id="footerHome">
                <img src="../img/footer_Home.png">
            </div>
        </a>
    </div>
    <div class="footerElement">
        <div id="footerClock"></div>
    </div>
</body>

</html>