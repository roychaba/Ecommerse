const Resolucion = () => {
    const ancho = window.screen.width; 
    
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