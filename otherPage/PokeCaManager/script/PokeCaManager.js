function appendRow() {
    var objTBL = document.getElementById("createTableId");
    if (!objTBL)
        return;

    var count = objTBL.rows.length;

    // 最終行に新しい行を追加
    var row = objTBL.insertRow(count);

    // 列の追加
    var colCardType = row.insertCell(0);
    var colCardName = row.insertCell(1);
    var colCardNum = row.insertCell(2);
    var colEdtButton = row.insertCell(3);
    var colRmvButton = row.insertCell(4);

    // 各列にスタイルを設定
    colCardType.className = "cardTypeCol";
    colCardName.className = "cardNameCol";
    colCardNum.className = "cardNumCol";
    colEdtButton.className = "editButtonCol";
    colRmvButton.className = "removeButtonCol";

    // 各列に表示内容を設定
    colCardType.innerHTML =
        '<div class="cardType">' +
        '<select name="cardType">' +
        '<option value = "0">PK</option>' +
        '<option value = "1">SP</option>' +
        '<option value = "2">GD</option>' +
        '<option value = "3">ST</option>' +
        '<option value = "4">EN</option>' +
        '</select>' +
        '</div>';
    colCardName.innerHTML = '<div class="cardName"><input type="text" id="cardNameId' + count + '"></div>';
    colCardNum.innerHTML = '<div class="cardNum"><input type="number" id="cardNumId' + count + '" min="1" max="4">枚</div>';
    colEdtButton.innerHTML = '<div class="commonButton" id="editButton' + count + '" value="確定" onclick="editRow(this)">編集</div>';
    colRmvButton.innerHTML = '<div class="commonButton" id="removeButton' + count + '" value="削除" onclick="deleteRow(this)">削除</div>';

    // 追加した行の入力フィールドへフォーカスを設定
    var objInp = document.getElementById("txt" + count);
    if (objInp) {
        objInp.focus();
    }
}