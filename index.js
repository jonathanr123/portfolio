$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 30) {
        $(".sticky").addClass("efectoTransparente");
        $(".sticky").removeClass("efectoNaranja");
        $(".sticky").removeClass("efectoAzul");
        $(".sticky").removeClass("efectoAzulFuerte");
      }
      else{
        $(".sticky").removeClass("efectoTransparente");  	
      }
      if (scroll > 550) {
        $(".sticky").addClass("efectoNaranja");
        $(".sticky").removeClass("efectoTransparente");
        $(".sticky").removeClass("efectoAzul");
        $(".sticky").removeClass("efectoAzulFuerte");
      }
      if (scroll > 1200) {
        $(".sticky").addClass("efectoTransparente");
        $(".sticky").removeClass("efectoNaranja");
        $(".sticky").removeClass("efectoAzul");
        $(".sticky").removeClass("efectoAzulFuerte");
      }
      if (scroll > 2700) {
        $(".sticky").addClass("efectoAzul");
        $(".sticky").removeClass("efectoNaranja");
        $(".sticky").removeClass("efectoTransparente");
        $(".sticky").removeClass("efectoAzulFuerte");
      }
      if (scroll > 3800) {
        $(".sticky").addClass("efectoTransparente");
        $(".sticky").removeClass("efectoNaranja");
        $(".sticky").removeClass("efectoAzul");
        $(".sticky").removeClass("efectoAzulFuerte");
      }
      if (scroll > 4500) {
        $(".sticky").addClass("efectoAzulFuerte");
        $(".sticky").removeClass("efectoNaranja");
        $(".sticky").removeClass("efectoAzul");
        $(".sticky").removeClass("efectoTransparente"); 
      }
    })
  })