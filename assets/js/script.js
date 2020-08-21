$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



$('a').click(function(){
    alert("Click");
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});



