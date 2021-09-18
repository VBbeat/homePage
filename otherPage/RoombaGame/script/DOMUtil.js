function getValue(id) {
    return document.getElementById(id).innerHTML;
}

function setValue(value, id) {
    let elm = document.getElementById(id);
    elm.innerHTML = value;
}

function getTableValue(row, col, tableId){
    let tableElm = document.getElementById(tableId);
    let cell = tableElm.rows[row].cells[col];
    return cell.innerHTML;
}

function setTableValue(row, col, tableId, value){
    let tableElm = document.getElementById(tableId);
    let cell = tableElm.rows[row].cells[col];
    cell.innerHTML = value;
}