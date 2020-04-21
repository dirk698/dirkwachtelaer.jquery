
$(document).ready(function(){
$("li").on({
    click:function(){
        $(this).css("text-decoration","line-through");
    },
    dblclick:function(){
        $(this).hide()
    }
})
})