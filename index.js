$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 30) {
        $(".sticky").addClass("azul");
        $(".sticky").removeClass("negro"); 
      }
      else{
        $(".sticky").removeClass("azul");  	
      }
      if (scroll > 550) {
        $(".sticky").addClass("negro");
        $(".sticky").removeClass("azul"); 
      }
    })
  })