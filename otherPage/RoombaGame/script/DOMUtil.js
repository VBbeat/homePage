function setValue(value, id) {
    let elm = document.getElementById(id);
    elm.innerHTML = value;
}

function getValue(id) {
    return document.getElementById(id).innerHTML;
}