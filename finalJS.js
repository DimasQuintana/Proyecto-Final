const prompt = require("prompt-sync")();

// Valor de los recargos
var precio_base = 2000;

var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

// // Recargo

var recargo = 0;
var precio_final_asegurado = 0;
var precio_final_conyuge = 0;
var precio_final_hijos = 0;
var total_precio_final;


// Edad permitida
var edad_permitida = 18;

//Iniciando

console.log("Iniciando.");

var nombre = prompt("Ingrese su nombre, por favor: ");
var edad = parseInt(prompt("Ingrese su edad, por favor (Solamente números): "));

if (edad < edad_permitida) {
  console.log(
    `Lo siento ${nombre} no se encuentra dentro de la edad permitida (18 años).`
  );
} else {
  tiene_conyuge = prompt(
    "¿Usted esta casado actualmente? "
  ).toLocaleLowerCase();

  if (tiene_conyuge == "si") {
    var edad_conyuge = parseInt(prompt("Ingrese la edad de su esposa/o: "));

    // Calcular total de poliza - conyuge

    if (edad_conyuge <=24){
        precio_final_conyuge = (precio_base * casado_18);
    } else if (edad_conyuge < 50){
        precio_final_conyuge = (precio_base * casado_25);
    } else {
        precio_final_conyuge = (precio_base * casado_50);
    }

    // console.log(precio_final_conyuge);

  } else if (tiene_conyuge == "no") {
    // No hace nada si no esta casado/a.
  } else {
    console.log("Respuesta no valida. Por favor responda Si o No.");
  }

  tiene_hijos = prompt("¿Usted tiene hijos que desee asegurar? Por favor responda Si o No. ").toLocaleLowerCase();

  if (tiene_hijos == 'si'){
    var cantidad_hijos = parseInt(prompt("Ingrese la cantidad de hijos que desea asegurar. (Solamente números): "));

    var edad_hijos = [];

    for (let i = 0; i < cantidad_hijos; i++){
        const edad_hijo = parseInt(prompt(`Ingrese la edad del hijo ${i + 1}: `));
        edad_hijos.push(edad_hijo)
    }

    // Calcular total poliza - hijos
    
    precio_final_hijos = (((cantidad_hijos * precio_base))*0.20);

    // console.log(precio_final_hijos);

    } else if (tiene_hijos == 'no'){
    // No hace nada si no tiene hijos.
    } else {
        console.log("Respuesta no valida.  Por favor responda Si o No.");
    }

    // Calcular total asegurado

    if (edad <= 24){
        precio_final_asegurado = precio_base + (precio_base * edad_18);
    } else if (edad < 50){
        precio_final_asegurado = precio_base + (precio_base * edad_25);
    } else {
        precio_final_asegurado = precio_base + (precio_base * edad_50);
    }
    
    // console.log(precio_final_asegurado);


    if (tiene_conyuge == 'si' && tiene_hijos == 'si'){
        total_precio_final = precio_final_asegurado + precio_final_conyuge + precio_final_hijos;
        console.log(`${nombre}, el valor total de su poliza es: Q`+total_precio_final);
    } else if (tiene_conyuge == 'si' && tiene_hijos == 'no'){
        total_precio_final = precio_final_asegurado + precio_final_conyuge;
        console.log(`${nombre}, el valor total de su poliza es: Q`+total_precio_final);
    } else if (tiene_conyuge == 'no' && tiene_hijos == 'si'){
        total_precio_final = precio_final_asegurado + precio_final_hijos;
        console.log(`${nombre}, el valor total de su poliza es: Q`+total_precio_final +`.00`);
    } else {
        precio_final_asegurado;
        console.log(`${nombre}, el valor total de su poliza es: Q`+precio_final_asegurado+`.00`);
    }
  

}
