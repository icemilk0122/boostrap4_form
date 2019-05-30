let name;
let bdy;
let bdm;
let bdd;
let gender;
let games = [];
let note;
let patt;
let result;
//document ready
$(function(){
    $("#send").click(function(e){ send(e); });
})

function send(e) 
{
    //很重要
    e.preventDefault();

    let allpass = true;
    $(".is-invalid").removeClass("is-invalid");
    $("#check_games_invalid").hide();
    //開始檢查
    name = $("#input_name").val();
    if(name == "")
    {
        $("#input_name").addClass("is-invalid");
        allpass = false;
    }
    email = $("#input_email").val();
    patt = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/i;
    result = patt.test(email);
    if (email == "" || !result) {
        $("#input_email").addClass("is-invalid");
        allpass = false;
    }
    phone = $("#input_phone").val();
    patt = /^09[0-9]{8}/i;
    result = patt.test(phone);
    if (phone == "" || !result) {
        $("#input_phone").addClass("is-invalid");
        allpass = false;
    }
    bdy = $("#sel_bdy").val();
    if (bdy == "") {
        $("#sel_bdy").addClass("is-invalid");
        allpass = false;
    }
    bdm = $("#sel_bdm").val();
    if (bdy == "") {
        $("#sel_bdm").addClass("is-invalid");
        allpass = false;
    }
    bdd = $("#sel_bdd").val();
    if (bdy == "") {
        $("#sel_bdd").addClass("is-invalid");
        allpass = false;
    }
    gender = $("input[name='radio_gender']:checked").val();
    games = [];
    $.map($("input[name='check_games']:checked"), function (el) {
        games.push($(el).val())
    })
    if (games.length == 0)
    {
        $("input[name='check_games']").addClass("is-invalid");
        $("#check_games_invalid").show();
    }
    note = $("#text_note").val();
    if (note == "") {
        $("#text_note").addClass("is-invalid");
        allpass = false;
    }
    if(allpass){
        alert("allpass");
    }
}


