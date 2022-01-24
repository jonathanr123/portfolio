window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
          } else {
            element.classList.remove('visible');
          }
  
        }
  });

window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content-bottom');
    let screenSize = window.innerHeight;
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          if(element.getBoundingClientRect().bottom < screenSize) {
            element.classList.add('visible');
          } else {
            element.classList.remove('visible');
          }
  
        }
  });


  $(window).on('load', function () {
    setTimeout(function () {
  $(".loader").css({visibility:"hidden",opacity:"0"})
}, 2000);

});