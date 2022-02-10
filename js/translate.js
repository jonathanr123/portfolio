function cambiarEspañol() {
   
    console.log('aoltoke')
    document.getElementById("homeNav").innerHTML = "Inicio";
    document.getElementById("aboutNav").innerHTML = "Sobre Mi";
    document.getElementById("educationNav").innerHTML = "Educación";
    document.getElementById("skillsNav").innerHTML = "Habilidades";
    document.getElementById("projectsNav").innerHTML = "Proyectos";
    document.getElementById("resumeNav").innerHTML = "Resumen";
    document.getElementById("contactNav").innerHTML = "Contacto";
    document.getElementById("languageNav").innerHTML = "ES";
    document.getElementById("textoHome1").innerHTML = "Hola, Soy Jonathan!";
    document.getElementById("textoHome2").innerHTML = "Bienvenido a Mi Mundo...";
    document.getElementById("textoHome3").innerHTML = "Soy el desarrollador de software que estas buscando.";
    document.getElementById("titleAbout").innerHTML = "<i>PERMITAME <b style="+"color:#FF8008"+">PRESENTARME_</b></i>";
    document.getElementById("parrafoAbout").innerHTML = "<i><b>Hola, Soy <a>Jonathan</a>.<br>Un apasionado <a>Full Stack Developer</a> y estudiante avanzado de <a>Ingeniería en Sistemas</a>. Me gusta aprender sobre nuevas <a>tecnologías</a> y las últimas <a>tendencias en diseño</a>, especialmente en la interfaz de usuario, para brindar una experiencia única.<br>Me encantan los perros y los videojuegos. En mi <a>tiempo libre</a> entreno, juego fútbol o me reúno con mis amigos.</b></i>";
    document.getElementById("titleEducation").innerHTML = "Educación";
    document.getElementById("subtitleEducation").innerHTML = "Un breve recorrido por mi formación académica y cursos certificados.";
    document.getElementById("parrafoTimeline1").innerHTML = "En Diciembre de 2015, Me gradué del gran Colegio Nacional \"Rafael Hernández\" de La Plata, Argentina.";
    document.getElementById("titleCard2").innerHTML = "<span class=\"small\">UTN - Facultad Regional La Plata</span>Diseño Web";
    document.getElementById("parrafoTimeline2").innerHTML = "En 2018, me certifiqué en un curso de Diseño Web con HTML y CSS, esta fue mi primer experiencia con el Desarrollo Web.";
    document.getElementById("titleCard3").innerHTML = "<span class=\"small\">UTN - Facultad Regional La Plata</span>Armado y Reparación de PC";
    document.getElementById("parrafoTimeline3").innerHTML = "En 2018, me certifiqué en un curso de Armado y Reparación de PC, Aprendí a ensamblar todos los componentes de una PC, también a detectar y solucionar las fallas que pueda tener.";
    document.getElementById("titleCard4").innerHTML = "<span class=\"small\">UTN - Facultad Regional La Plata</span>Ingeniería en Sistemas";
    document.getElementById("parrafoTimeline4").innerHTML = "Actualmente, me encuentro en el último tramo de mi carrera, me faltan dos materias para graduarme como Ingeniero en Sistemas.";
    document.getElementById("titleSkills").innerHTML = "Habilidades blandas";
    document.getElementById("skill_1").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Resolución de problemas";
    document.getElementById("skill_2").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Trabajo en Equipo";
    document.getElementById("skill_3").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Autodisciplina";
    document.getElementById("skill_4").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Comunicación Efectiva";
    document.getElementById("skill_5").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Creativo";
    document.getElementById("subtitleSkills").innerHTML = "Habilidades Técnicas";

    document.getElementById("titleProjects").innerHTML = "Mis Proyectos";
    document.getElementById("parrafoProjects_1").innerHTML = "Este proyecto es parte de mis practicas supervisadas desarrollada dentro del grupo GIDAS de la UTN FRLP. Está enfocado en monitorear el estado de salud de las personas con Parkinson y ayudar con su bienestar. Está construido con React Js en el frontend y Django en el backend. Y la base de datos implementada en MySQL.";
    document.getElementById("subtitleProjects_2").innerHTML = "Página de Artes Marciales";
    document.getElementById("parrafoProjects_2").innerHTML = "Este es un proyecto propio que realicé durante el curso de Diseño Web, con HTML y CSS. La idea era armar un sitio web de artes marciales, poder tener información de las diferentes disciplinas, poder ver videos y fotos de cada arte marcial. Y también poder consultar la ubicación de los gimnasios en La Plata, Argentina.";

    document.getElementById("titleResume").innerHTML = "Resumen";
    document.getElementById("buttonResume").innerHTML = "<span id=\"span1\"></span><span id=\"span2\"></span><span id=\"span3\"></span><span id=\"span4\"></span>Descargar CV";

    document.getElementById("titleContact").innerHTML = "Contactame!";
    document.getElementById("parrafoContact").innerHTML = "Copyright © 2022 - Diseñado y Desarrollado por Jonathan Rodriguez";
};

function cambiarIngles() {
   
    console.log('aoltoke')
    document.getElementById("homeNav").innerHTML = "Home";
    document.getElementById("aboutNav").innerHTML = "About Me";
    document.getElementById("educationNav").innerHTML = "Education";
    document.getElementById("skillsNav").innerHTML = "Skills";
    document.getElementById("projectsNav").innerHTML = "Proyects";
    document.getElementById("resumeNav").innerHTML = "Resume";
    document.getElementById("contactNav").innerHTML = "Contact";
    document.getElementById("languageNav").innerHTML = "EN";
    document.getElementById("textoHome1").innerHTML = "Hi, I'm Jonathan!";
    document.getElementById("textoHome2").innerHTML = "Welcome to My World...";
    document.getElementById("textoHome3").innerHTML = "I'm the software developer you are looking for.";
    document.getElementById("titleAbout").innerHTML = "<i>LET ME <b style="+"color:#FF8008"+">INTRODUCE</b> MYSELF_</i>";
    document.getElementById("parrafoAbout").innerHTML = "<i><b>Hi, I'm <a>Jonathan</a>.<br>A passionate <a>Full Stack Developer</a> and advanced <a>Systems Engineering student</a>.<br>I like learning about new <a>technologies</a> and the latest <a>design trends</a>, especially in the user interface, to provide a unique experience.<br>I love dogs and video games. In my <a>free time</a> I train, play football or meet with my friends.</b></i>";
    document.getElementById("titleEducation").innerHTML = "Education";
    document.getElementById("subtitleEducation").innerHTML = "A brief tour of my academic training and certified courses.";
    document.getElementById("parrafoTimeline1").innerHTML = "In December 2015, I graduated from the great \"Rafael Hernández\" National College in La Plata, Argentina.";
    document.getElementById("titleCard2").innerHTML = "<span class=\"small\">UTN - Facultad Regional La Plata</span>Web Design";
    document.getElementById("parrafoTimeline2").innerHTML = "In 2018, I certified in a Web Design Course with HTML and CSS, it was my first experience with web development.";
    document.getElementById("titleCard3").innerHTML = "<span class=\"small\">UTN - Facultad Regional La Plata</span>PC repair and assembly";
    document.getElementById("parrafoTimeline3").innerHTML = "In 2018, I certified in a PC Assembly and Repair Course, I learned to assemble all the components of a PC, also to detect and solve the failures that it may have.";
    document.getElementById("titleCard4").innerHTML = "<span class=\"small\">UTN - Facultad Regional La Plata</span>Systems engineering";
    document.getElementById("parrafoTimeline4").innerHTML = "Currently, I am going through the last stretch of my career, I am only two subjects away from graduating as a Systems Engineer.";
    document.getElementById("titleSkills").innerHTML = "Soft Skills";
    document.getElementById("skill_1").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Problem Solving Skills";
    document.getElementById("skill_2").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Teamwork";
    document.getElementById("skill_3").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Self-Discipline";
    document.getElementById("skill_4").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Effective Communication";
    document.getElementById("skill_5").innerHTML = "<img src=\"icons/check.svg\" alt=\"Graphic\">Creative";
    document.getElementById("subtitleSkills").innerHTML = "Professional Skillset";

    document.getElementById("titleProjects").innerHTML = "My Projects";
    document.getElementById("parrafoProjects_1").innerHTML = "This project is part of my supervised internship developed within the GIDAS group of the UTN FRLP. It is focused on monitoring the health status of people with Parkinson's and helping with their well-being.<br>It is built with React Js on the frontend and Django on the backend. And the database implemented in MySQL.";
    document.getElementById("subtitleProjects_2").innerHTML = "Martial Arts Page";
    document.getElementById("parrafoProjects_2").innerHTML = "This is my own project that I did during the Web Design course, with HTML and CSS. The idea was to put together a martial arts website, to be able to have information on the different disciplines, to be able to see videos and photos of each martial art. And also be able to check the location of the gyms in La Plata, Argentina.";

    document.getElementById("titleResume").innerHTML = "Resume";
    document.getElementById("buttonResume").innerHTML = "<span id=\"span1\"></span><span id=\"span2\"></span><span id=\"span3\"></span><span id=\"span4\"></span>Download CV";

    document.getElementById("titleContact").innerHTML = "Contact Me!";
    document.getElementById("parrafoContact").innerHTML = "Copyright © 2022 - Designed and Developed by Jonathan Rodriguez";
};