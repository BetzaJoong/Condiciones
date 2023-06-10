// __Borde__
function toggleBorder() {
    const image = document.querySelector('.image');
    image.classList.toggle('active');
}


// -------------------------------------------------------------------------------------------------------------------

// __Stickers__
document.querySelector("#verificar-btn").addEventListener("click", function () {
    const input1 = parseInt(document.querySelector("#input1").value);
    const input2 = parseInt(document.querySelector("#input2").value);
    const input3 = parseInt(document.querySelector("#input3").value);

    const suma = input1 + input2 + input3;

    if (isNaN(input1) || isNaN(input2) || isNaN(input3)) { //verifica si al menos uno de los valores input1, input2 o input3 no es un número válido.
        document.querySelector("#resultado").textContent = "Debes llenar los 3 campos."; //En este caso agrego el sig. codigo en el que le dice al usuario que debe de llenar los 3 campos.
        document.querySelector("#resultado").style.color = "red";
    } else if (input1 < 0 || input2 < 0 || input3 < 0) {
        document.querySelector("#resultado").textContent = "No se permiten números negativos.";
        document.querySelector("#resultado").style.color = "red";
    } else if (suma <= 10) {
        document.querySelector("#resultado").textContent = "Llevas " + suma + " stickers.";
        document.querySelector("#resultado").style.color = "green";
    } else {
        document.querySelector("#resultado").textContent = "Llevas demasiados stickers. (" + suma + ")";
        document.querySelector("#resultado").style.color = "red";
    }
});

document.querySelector("#reiniciar-btn").addEventListener("click", function () {
    document.querySelector("#input1").value = "";
    document.querySelector("#input2").value = "";
    document.querySelector("#input3").value = "";
    document.querySelector("#resultado").textContent = "";
    document.querySelector("#resultado").style.color = "initial";
});
// ------------------------------------------------------------------------------------------------------------------------

// Password
const password = document.querySelector("#password");
const num1 = document.querySelector('#numero1');
const num2 = document.querySelector('#numero2');
const num3 = document.querySelector('#numero3');
const combi = document.querySelector('#combinacion');
const btnIngresar = document.querySelector('#btnIngresar');
const btnReiniciar = document.querySelector('#btnReiniciar');

btnIngresar.addEventListener('click', function () {
    const val1 = num1.value;
    const val2 = num2.value;
    const val3 = num3.value;

    // Campo está vacío
    if (val1 === '0' && val2 === '0' && val3 === '0') {
        combi.textContent = 'No deje los campos vacíos';
        combi.style.color = 'red';
        return; // Salir de la función para evitar la ejecución del resto del código y asi poder volver a iniciar.
    }

    if (val1 === '9' && val2 === '1' && val3 === '1') {
        combi.textContent = 'Password 1 correcto';
        combi.style.color = 'green';
    } else if (val1 === '7' && val2 === '1' && val3 === '4') {
        combi.textContent = 'Password 2 es correcto';
        combi.style.color = 'green';
    } else {
        combi.textContent = 'Password incorrecto';
        combi.style.color = 'red';
    }
});

btnReiniciar.addEventListener('click', function () {
    num1.selectedIndex = 0;
    num2.selectedIndex = 0;
    num3.selectedIndex = 0;
    combi.textContent = '';
});

// -------------------------------------------------------------------------------------------------------------------------

