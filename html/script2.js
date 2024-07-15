window.onload = function() {
    setTimeout(function() {
      document.querySelector('.one').classList.add('show1');
    }, 2145);
    setTimeout(function() {
      document.querySelector('.two').classList.add('show2');
    }, 2145);
  };

$('.BornHS__Input').change(function(){
    if($(this).is(":checked")) {
        $('.BornHS__Wrapper').addClass("BornHS__Blur");
    } else {
        $('.BornHS__Wrapper').removeClass("BornHS__Blur");
    }
});