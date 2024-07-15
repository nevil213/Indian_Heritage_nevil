window.onload = function() {
  setTimeout(function() {
    document.querySelector('.one').classList.add('show1');
  }, 1900);
  setTimeout(function() {
    document.querySelector('.two').classList.add('show2');
  }, 1900);
};


  $('.BornHS__Input').change(function(){
    if($(this).is(":checked")) {
        $('.BornHS__Wrapper').addClass("BornHS__Blur");
        $(this).closest('.BornHS__Wrapper').removeClass("BornHS__Blur");
    } else {
        $('.BornHS__Wrapper').removeClass("BornHS__Blur");
    }
});

