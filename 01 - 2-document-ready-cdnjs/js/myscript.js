// jouw code komt hier
// $("h1").hide()

// console.log("dit werkt!");
$(document).ready(function(){
    alert("Hello world")
    $("div").css("background-color", "blue");
    $("div").text("joepie, bijna weekend");
    $("tr:even").css({"background": "white", "color": "black"});
    $("tr:odd").css({"background":"black","color":"white"})
})