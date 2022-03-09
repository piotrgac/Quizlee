function getID(clicked_id){
     console.log(clicked_id);
     document.getElementById(clicked_id).style.border='2px solid #1A1A1A';
}
function disable_box(clicked_id){
     document.getElementById(clicked_id).style.border="0px solid #000";
}
function check_box(answer){
    document.getElementById(answer).checked="checked";
}
/*function active_box(){
    document.getElementById('que1').style.border='2px solid #1A1A1A';
}


function active_box1(){
    document.getElementById(optionID).style.border='2px solid #1A1A1A';
}
function disable_box1(){
    document.getElementById(optionID).style.border="0px solid #000";
}
*/