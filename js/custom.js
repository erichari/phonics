$(function(){
    $('img').click(function() {
        var className = $(this).attr('class').split(" ")[1];
        $("#"+className).get(0).play();
        console.log(className);
    });
})