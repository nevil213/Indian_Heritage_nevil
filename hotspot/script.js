$('.BornHS__Input').change(function(){
    if($(this).is(":checked")) {
        $('.BornHS__Wrapper').addClass("BornHS__Blur");
    } else {
        $('.BornHS__Wrapper').removeClass("BornHS__Blur");
    }
});