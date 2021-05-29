const nav=document.getElementById("nav");
const nav_contenedor=document.getElementById("nav_contenedor");

function anchoPagina(){
    if (window.innerWidth<750){
        if (nav_contenedor.classList.contains('is-active')) {
            nav_contenedor.addEventListener('click', hideShow);
        } else {nav_contenedor.addEventListener('click', hideShow);}
    } 
}       

function hideShow() {
    if (nav_contenedor.classList.contains('is-active')) {
        nav_contenedor.classList.remove('is-active');
        nav.style.display="none";   
    } else {
        nav_contenedor.classList.add('is-active');
        nav.style.display="grid";
    }
    anchoPagina();
}

anchoPagina();



