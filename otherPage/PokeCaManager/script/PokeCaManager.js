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
        '<select name="cardType" id="cardTypeId"' + count + '>' +
        '<option value = "0">PK</option>' +
        '<option value = "1">SP</option>' +
        '<option value = "2">GD</option>' +
        '<option value = "3">ST</option>' +
        '<option value = "4">EN</option>' +
        '</select>' +
        '</div>';
    colCardName.innerHTML = '<div class="cardName"><input type="text" id="cardNameId' + count + '" value="カード名"></div>';
    colCardNum.innerHTML = '<div class="cardNum"><input type="number" id="cardNumId' + count + '" min="1" max="4" value="1">枚</div>';
    colEdtButton.innerHTML = '<div class="commonButton" id="editButton' + count + '" value="確定" onclick="editRow(this)">確定</div>';
    colRmvButton.innerHTML = '<div class="commonButton" id="removeButton' + count + '" value="削除" onclick="deleteRow(this)">削除</div>';

    // 追加した行の入力フィールドへフォーカスを設定
    var objCardType = document.getElementById("cardNameId" + count);
    if (objCardType) {
        objCardType.focus();
    }
}

function editRow(obj) {
    var objTR = obj.parentNode.parentNode;
    var rowId = objTR.sectionRowIndex;
    var objCardType = document.getElementById("cardTypeId" + rowId);
    var objCardTypeParent = objCardType.parentNode;
    var objCardName = document.getElementById("cardNameId" + rowId);
    var objCardNameParent = objCardName.parentNode;
    var objCardNum = document.getElementById("cardNumId" + rowId);
    var objCardNumParent = objCardNum.parentNode;
    var objBtn = document.getElementById("editButton" + rowId);

    if (!objCardName || !objBtn)
        return;

    // モードの切り替えはボタンの値で判定   
    if (objBtn.value == "編集") {
        objCardNameParent
        objCardNum.style.cssText = "border:1px solid #888;"
        objCardNum.readOnly = false;
        objCardNum.focus();
        objBtn.value = "確定";
        objBtn.innerHTML = "確定";
    }
    else {
        objCardName.style.cssText = "border:none;"
        objCardName.readOnly = true;
        objCardNum.style.cssText = "border:none;"
        objCardNum.readOnly = true;
        objBtn.value = "編集";
        objBtn.innerHTML = "編集";
    }
}