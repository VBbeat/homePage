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
    colEdtButton.innerHTML = '<div class="commonButton" id="editButton' + count + '" value="確定" onclick="editRow(this)">確定</div>';
    colRmvButton.innerHTML = '<div class="commonButton" id="removeButton' + count + '" value="削除" onclick="deleteRow(this)">削除</div>';

    // 追加した行の入力フィールドへフォーカスを設定
    var objInp = document.getElementById("cardNameId" + count);
    if (objInp) {
        objInp.focus();
    }
}

function editRow(obj) {
    var objTR = obj.parentNode.parentNode;
    var rowId = objTR.sectionRowIndex;
    var objInp = document.getElementById("cardNameId" + rowId);
    var objBtn = document.getElementById("editButton" + rowId);

    if (!objInp || !objBtn)
        return;

    // モードの切り替えはボタンの値で判定   
    if (objBtn.value == "編集") {
        objInp.style.cssText = "border:1px solid #888;"
        objInp.readOnly = false;
        objInp.focus();
        objBtn.value = "確定";
        objBtn.innerHTML = "確定";
    }
    else {
        objInp.style.cssText = "border:none;"
        objInp.readOnly = true;
        objBtn.value = "編集";
        objBtn.innerHTML = "編集";
    }
}