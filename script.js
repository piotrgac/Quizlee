let current_id = 0;
function getID(clicked_id) {
    current_id = clicked_id;
    return current_id;
}

function check_box(answer) {
     document.getElementById(answer).checked="checked";
     document.getElementById(current_id).style.border = '2px solid #1A1A1A';
}
