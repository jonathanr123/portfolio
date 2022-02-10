function check(){
    let elements = document.getElementsByName('checkbox');
    console.log(elements);
    if(elements.checked){
        console.log('altoke')
    }else{
        console.log('perro')
    }
}

$(document).on('change','#checkbox' ,function(e) {
    if(this.checked) {
        console.log('aoltoke')
        /* NavBar */
        $("#language-content").css("background","black");
        $("#logo").css("color","rgb(0, 217, 255)");
        $(".nav-a").css("color","rgb(0, 217, 255)");
        $(".sticky").css("background","black");
        /* Home */
        $("#home").css("background","linear-gradient(to right, #001B20, #000000)");
        $(".home-content h1").css("color","rgb(0, 217, 255)");
        $(".home-content h1").css("text-shadow", "1px 1px 2px rgb(0, 217, 255)");
        document.getElementById("imagenHome").src = "./images/fotoperfilBlue.png";
        $(".custom-shape-divider-bottom-1642442524 .shape-fill").css("fill","#0C6370");
        /* About */
        $("#about").css("background","#0C6370");
        $("#about h1").css("color","white");
        $("#about b").css("color","rgb(0, 217, 255)");
        $("#parrafoAbout b").css("color","white");
        $("#parrafoAbout a").css("color","rgb(0, 217, 255)");
        document.getElementById("imagenAbout").src = "./images/developerBlue.svg";
        $(".custom-shape-divider-top-1642493106 .shape-fill").css("fill","#0C6370");
        /* Education */
        $("#timeline").css("background","linear-gradient(to right, #001B20, #000000)");
        $("#timeline h1").css("color","rgb(0, 217, 255)");
        $("#timeline h1").css("text-shadow", "1px 1px 2px rgb(0, 217, 255)");
        $("#timeline p.leader").css("color","white");
        $("#timeline .demo-card").css("background","#0C6370");
        $("#timeline .demo-card .body").css("background","#10282C");
        $("#timeline .demo-card .body p").css("color","white");
        $(".custom-shape-divider-bottom-1642719256 .shape-fill").css("fill","#0C6370");
        /* Skills */
        $("#skills").css("background","#0C6370");
        $("#skills h1").css("color","white");
        $("#skills h2").css("color","white");
        $("#skills #card").css("background","linear-gradient(45deg, black, transparent)");
        $(".custom-shape-divider-top-1642802362 .shape-fill").css("fill","#0C6370");
        /* Projects */
        $("#projects").css("background","linear-gradient(to right, #001B20, #000000)");
        $("#projects h1").css("color","#00D9FF");
        $("#projects h1").css("text-shadow", "1px 1px 2px rgb(0, 217, 255)");
        $("#projects #card-project").css("background","#0C6370");
        $("#projects #card-project h3,p").css("color","white");
        $(".custom-shape-divider-bottom-1642746153 .shape-fill").css("fill","#0C6370");
        /* Resume */
        $("#resume").css("background","#0C6370");
        $("#resume h1").css("color","white");
        $(".btn-neon").css("background","linear-gradient(to right, #001B20, #000000)");
        $("#resume img").css("box-shadow","10px 10px 8px #10282c, -2px -2px 8px #c2c6c7");
        $(".custom-shape-divider-top-1642829448 .shape-fill").css("fill","#0C6370");
        /* Contact */
        $("#contact").css("background","linear-gradient(to right, #001B20, #000000)");
        $("#contact h1, #contact p").css("color","rgb(0, 217, 255)");
    }
    else {
        /* NavBar */
        $("#language-content").css("background","orange");
        $("#logo").css("color","");
        $(".nav-a").css("color","");
        $(".sticky").css("background","");
        /* Home */
        $("#home").css("background","");
        $(".home-content h1").css("color","");
        $(".home-content h1").css("text-shadow", "");
        document.getElementById("imagenHome").src = "./images/fotoperfil.png";
        $(".custom-shape-divider-bottom-1642442524 .shape-fill").css("fill","");
        /* About */
        $("#about").css("background","");
        $("#about h1").css("color","");
        $("#about b").css("color","#FF8008");
        $("#parrafoAbout b").css("color","");
        $("#parrafoAbout a").css("color","#FF8008");
        document.getElementById("imagenAbout").src = "./images/developer.svg";
        $(".custom-shape-divider-top-1642493106 .shape-fill").css("fill","");
        /* Education */
        $("#timeline").css("background","");
        $("#timeline h1").css("color","");
        $("#timeline h1").css("text-shadow", "");
        $("#timeline p.leader").css("color","");
        $("#timeline .demo-card").css("background","");
        $("#timeline .demo-card .body").css("background","");
        $("#timeline .demo-card .body p").css("color","");
        $(".custom-shape-divider-bottom-1642719256 .shape-fill").css("fill","");
        /* Skills */
        $("#skills").css("background","");
        $("#skills h1").css("color","");
        $("#skills h2").css("color","");
        $("#skills #card").css("background","");
        $(".custom-shape-divider-top-1642802362 .shape-fill").css("fill","");
        /* Projects */
        $("#projects").css("background","");
        $("#projects h1").css("color","");
        $("#projects h1").css("text-shadow", "");
        $("#projects #card-project").css("background","");
        $("#projects #card-project h3,p").css("color","");
        $(".custom-shape-divider-bottom-1642746153 .shape-fill").css("fill","");
        /* Resume */
        $("#resume").css("background","");
        $("#resume h1").css("color","");
        $(".btn-neon").css("background","");
        $("#resume img").css("box-shadow","");
        $(".custom-shape-divider-top-1642829448 .shape-fill").css("fill","");
        /* Contact */
        $("#contact").css("background","");
        $("#contact h1, #contact p").css("color","white");
    }
});