let opciones = ["piedra", "papel", "tijeras", "lagarto", "spock"]


let submit = document.getElementById("frm1");
submit.addEventListener("submit", function(e){ 
    userchoice();
    e.preventDefault();
});

function userchoice(){
    let userChoice = document.getElementById("userChoice").value.toLowerCase();
    let numAl=Math.floor(Math.random()*opciones.length);

if (userChoice == "piedra"){
    if (opciones[numAl] == "papel"){document.getElementById("resultado").innerHTML = "<h2>¡Perdiste! =(</h2> <h4> La computadora ha elegido Papel. </h4>"}
    else{
        if(opciones[numAl] == "tijeras"){
            document.getElementById("resultado").innerHTML ="<h2>¡Ganaste! =) </h2> <h4> La computadora ha elegido Tijeras. </h4>";
        }else{
            if(opciones[numAl] == "lagarto"){
                document.getElementById("resultado").innerHTML ="<h2>¡Ganaste! =) </h2> <h4> La computadora ha elegido Lagarto. </h4>";

            }else{if(opciones[numAl] == "spock"){
                document.getElementById("resultado").innerHTML ="<h2>¡Perdiste! =(</h2> <h4> La computadora ha elegido Spock. </h4> ";}

}
}
}
}


if (userChoice == "papel"){
    if (opciones[numAl] == "piedra"){document.getElementById("resultado").innerHTML = "<h2>¡Ganaste! =) </h2><h4> La computadora ha elegido Piedra. </h4>"}
    else{
        if(opciones[numAl] == "tijeras"){
            document.getElementById("resultado").innerHTML ="<h2>¡Perdiste! =(</h2><h4> La computadora ha elegido Tijeras. </h4>";
        }else{
            if(opciones[numAl] == "lagarto"){
                document.getElementById("resultado").innerHTML ="<h2>¡Perdiste! =(</h2><h4> La computadora ha elegido Lagarto. </h4>";

            }else{if(opciones[numAl] == "spock"){
                document.getElementById("resultado").innerHTML ="<h2>¡Ganaste! =) </h2><h4> La computadora ha elegido Spock. </h4>";}

}
}
}
}

if (userChoice == "tijeras"){
    if (opciones[numAl] == "piedra"){document.getElementById("resultado").innerHTML = "<h2>¡Perdiste! =(</h2><h4> La computadora ha elegido Piedra. </h4>"}
    else{
        if(opciones[numAl] == "papel"){
            document.getElementById("resultado").innerHTML ="<h2>¡Ganaste! =) </h2><h4> La computadora ha elegido Papel. </h4>";
        }else{
            if(opciones[numAl] == "lagarto"){
                document.getElementById("resultado").innerHTML ="<h2>¡Ganaste! =) </h2><h4> La computadora ha elegido Lagarto. </h4>";

            }else{if(opciones[numAl] == "spock"){
                document.getElementById("resultado").innerHTML ="<h2>¡Perdiste! =(</h2><h4> La computadora ha elegido Spock. </h4>";}

}
}
}
}

if (userChoice == "lagarto"){
    if (opciones[numAl] == "piedra"){document.getElementById("resultado").innerHTML = "<h2>¡Perdiste! =(</h2><h4> La computadora ha elegido Piedra. </h4>"}
    else{
        if(opciones[numAl] == "papel"){
            document.getElementById("resultado").innerHTML ="<h2>¡Ganaste! =) </h2><h4> La computadora ha elegido Papel. </h4>";
        }else{
            if(opciones[numAl] == "tijeras"){
                document.getElementById("resultado").innerHTML ="<h2>¡Perdiste! =(</h2><h4> La computadora ha elegido Tijeras. </h4>";

            }else{if(opciones[numAl] == "spock"){
                document.getElementById("resultado").innerHTML ="<h2>¡Ganaste! =) </h2><h4> La computadora ha elegido Spock. </h4>";}

}
}
}
}

if (userChoice == "spock"){
    if (opciones[numAl] == "piedra"){document.getElementById("resultado").innerHTML = "<h2>¡Ganaste! =) </h2><h4> La computadora ha elegido Piedra. </h4>"}
    else{
        if(opciones[numAl] == "papel"){
            document.getElementById("resultado").innerHTML ="<h2>¡Perdiste! =(</h2><h4> La computadora ha elegido Papel. </h4>";
        }else{
            if(opciones[numAl] == "tijeras"){
                document.getElementById("resultado").innerHTML ="<h2>¡Ganaste! =) </h2><h4> La computadora ha elegido Tijeras. </h4>";

            }else{if(opciones[numAl] == "lagarto"){
                document.getElementById("resultado").innerHTML ="<h2>¡Perdiste! =(</h2><h4> La computadora ha elegido Lagarto. </h4>";}

}
}
}
}


}





