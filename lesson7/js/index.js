let name;
let bdy;
let bdm;
let bdd;
let gender;
let games = [];
let note;
//document ready
$(function(){
    //文字框賦值
    $("#input_name").val('李小華');
    //文字框取值
    name = $("#input_name").val();
    console.log("name is: " + name);
    //下拉選單賦值
    $("#sel_bdy").val('1983');
    //下拉選單取值
    //year
    bdy = $("#sel_bdy").val();
    console.log("bdy is: " + bdy);
    $("#sel_bdy").val('1983');
    //mon
    bdm = $("#sel_bdm").val();
    console.log("bdm is: " + bdm);
    //day
    bdd = $("#sel_bdd").val();
    console.log("bdd is: " + bdd);
    //radio賦值
    $("input[name='radio_gender'][value='f']").prop("checked", true);
    //radio取值
    gender = $("input[name='radio_gender']:checked").val()
    console.log("gender is: " + gender);
    //checkbox賦值
    $("#check_games_1").prop("checked", true);
    $("input[name='check_games'][value='2']").prop("checked", true);
    //checkbox取值
    $.map($("input[name='check_games']:checked"), function (el) {
        games.push($(el).val())
    })
    console.log("games is: " + games);
    //textarea賦值
    $("#text_note").val('Hi!餵食叔叔');
    //textarea取值
    let note = $("#text_note").val();
    console.log("note is: " + note);

    //按鈕送出事件
    $("#send").on('click', function(e){ send(e); });
    $("#send").click(function(e){ send(e); });
})

function send(e) 
{
    //很重要
    e.preventDefault();

    name = $("#input_name").val();
    bdy = $("#sel_bdy").val();
    bdm = $("#sel_bdm").val();
    bdd = $("#sel_bdd").val();
    gender = $("input[name='radio_gender']:checked").val();
    games = [];
    $.map($("input[name='check_games']:checked"), function (el) {
        games.push($(el).val())
    })
    note = $("#text_note").val();

    console.log("===== button click ======");
    console.log("name is: " + name);
    console.log("bd is: " + bdy + "-" + bdm + "-" + bdd);
    console.log("gender is: " + gender);
    console.log("games is: " + games);
    console.log("note is: " + note);
}