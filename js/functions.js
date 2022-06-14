function circulo(){
    var figura = document.getElementById("figura");
    /*CREAMOS LA VARIABLE FIGURA PARA CAPTURAR EL ELEMENTO CON LA FUNCION "getElementById" */
    figura.classList.toggle("circulo") /*Toggle sirve para alterar o trasformar un clase en este caso figura*/

}

function rombo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rombo")
}

function rectanguloh(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rectanguloh")
}

function rectangulov(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rectangulov")
}

function arriba(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("arriba")
}

function abajo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("abajo")
}

function izquierda(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("izquierda")
}

function derecha(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("derecha")
}

function diagonal(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("diagonal")
}

function triangulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("triangulo")
}

function imagen(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("imagen")

}
function fecha() {
document.getElementById("demo").innerHTML = Date();
}
