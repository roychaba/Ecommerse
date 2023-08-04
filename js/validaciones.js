import { valida } from "./login.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

textareas.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});


inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

//document.getElementById("mensaje").addEventListener("keyup", validarInput);
//document.getElementById("asunto").addEventListener("keyup", validarInput);
//document.getElementById("nombre").addEventListener("keyup", validarInput);
document.getElementById("lgCorreo").addEventListener("keyup", validarInput);


function validarInput() {
  if (!document.getElementById("lgCorreo").value.length){
    document.getElementById("lgEntrar").disabled = true;
    document.getElementById("lgEntrar").classList.remove("formcontato__botao");
    document.getElementById("lgEntrar").classList.add("formcontato__botao__disable");
  } 
} 