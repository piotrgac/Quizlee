let current_id = 0;
function getID(clicked_id) {
    current_id = clicked_id;
    return current_id;
}

function check_box(answer){
    document.getElementById(answer).checked = "checked";
}