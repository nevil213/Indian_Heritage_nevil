function showHideDivs() {
    const divOne = document.querySelector('.one');
    const divTwo = document.querySelector('.two');
  
    if (divOne && divTwo) {
      divOne.style.display = 'none'; // Hide div with class "one"
      divTwo.style.display = 'block'; // Unhide div with class "two"
    } else {
      console.error('Divs with classes "one" and "two" not found.'); // Handle potential errors
    }
  }
  
  setTimeout(showHideDivs, 300);

  $('.BornHS__Input').change(function(){
    if($(this).is(":checked")) {
        $('.BornHS__Wrapper').addClass("BornHS__Blur");
    } else {
        $('.BornHS__Wrapper').removeClass("BornHS__Blur");
    }
});