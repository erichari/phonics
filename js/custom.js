$(function(){
    $('img').click(function() {
        var className = $(this).attr('class').split(" ")[1];
        $("#"+className).get(0).play();
        $(this).animate({'width': '50%'}, 200).animate({'width': '60%'}, 200);
    });
})