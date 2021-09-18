function getValue(id) {
    return document.getElementById(id).innerHTML;
}

function setValue(value, id) {
    let elm = document.getElementById(id);
    elm.innerHTML = value;
    elm.style.color = "#000000";
}

function setValue(color, id) {
    let elm = document.getElementById(id);
    elm.style.color = color;
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
    cell.style.color = "#000000";
}

function setTableColor(row, col, tableId, color){
    let tableElm = document.getElementById(tableId);
    let cell = tableElm.rows[row].cells[col];
    cell.style.color = color;
}