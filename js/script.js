//Muestra cantidad de columnas de productos según la resolución de pantalla
const Resolucion = () => {
    const ancho = window.screen.width; 
    var title = document.getElementsByTagName("title")[0].innerHTML;
    console.log(title);
    if (ancho <=768 ){
        document.getElementById("prodTresTres").remove();
        document.getElementById("prodTresDos").remove();
        document.getElementById("prodDosDos").remove();
        document.getElementById("prodDosTres").remove();
        document.getElementById("prodUnoDos").remove();
        document.getElementById("prodUnoTres").remove();
        
    } 
}

Resolucion();

//Redirecciona de la pagina principal a la login
document.getElementById("login").addEventListener("click", redireccionar);

function redireccionar(){
    window.location.href = "login.html";
}


