$(function(){
    $('img').click(function() {
        var className = $(this).attr('class');
        $("#"+className).get(0).play();
        $(this).animate({'width': '40%'}, 200).animate({'width': '50%'}, 200);
    });
})