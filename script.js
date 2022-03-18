let current_id = 0;
function getID(clicked_id) {
    current_id = clicked_id;
    return current_id;
}

function check_box(answer){
    document.getElementById(answer).checked = "checked";
    document.getElementById(current_id).style.border = "2px solid black";
}
function disable_box(answer){
    addEventListener(onmouseout,)
    if (document.getElementById(answer).checked === true){
        document.getElementById(current_id).style.border="2px solid black";
    }
    else {
        document.getElementById(current_id).style.border="0px solid black";
    }
}