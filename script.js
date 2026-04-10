const input_Fecha = document.getElementById("fechaNacimiento");
const boton = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", calcularEdad);

function calcularEdad() {
  
  const fechaInput = input_Fecha.value;

  if (fechaInput === "") {
    resultado.innerText = "Llena los campos.";
    alert("Llena los campos");
    return;
  }

  const fechaNacimiento = new Date(fechaInput);
  const hoy = new Date();

  if (fechaNacimiento > hoy) {
    resultado.innerText = "La fecha no puede pasar de hoy.";
    return;
  }

  const añoActual = hoy.getFullYear();
  const añoNacimiento = fechaNacimiento.getFullYear();

  let edad = añoActual - añoNacimiento;

  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();

  const mesNacimiento = fechaNacimiento.getMonth();
  const diaNacimiento = fechaNacimiento.getDate();

  if (
    mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && diaActual < diaNacimiento)
  ) {
  }

  let  mensaje = "";

    if (edad < 18) {
    mensaje += "Eres un menor.";
  } else if (edad >= 18 && edad < 60) {
    mensaje += "Estas viejo.";
  } else {
    mensaje += "Estas Muy viejo.";
  }

  resultado.innerText = "Tu tienes : " + edad + " años. " + mensaje;
}