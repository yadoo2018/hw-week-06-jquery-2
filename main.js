// exercise one:

$("#clicker_1").click(function () {
    $("#secret_1").fadeIn(2000);
});

$("#clicker_2").click(function () {
    $("#secret_2").slideDown(2000);
});
$("#clicker_3").click(function () {
    $("#secret_3").fadeToggle(2000, "linear");
});



// exercise two:

$("#clicker_4").click(function() {
    $(".secret_4").slideUp(2000);
});



// exercise three:

$("#clicker_5").click(function() {
    $("img").attr("src", "http://rs284.pbsrc.com/albums/ll36/Bigsteve87/Gifs/Liz_Lemon_High_Five.gif~c200");
});
