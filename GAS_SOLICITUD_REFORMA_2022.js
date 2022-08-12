// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

//Variables
let rotar = 0;

//Star
document.getElementById("InForHFC").classList.add("d-none");
document.getElementById("InForFTTH").classList.add("d-block");


//document.getElementById("InForHFC").classList.toggle("d-none");
//document.getElementById("InForFTTH").classList.toggle("d-none");


//Eventos


document.getElementById("GENERAR").addEventListener('click', () => {

    document.getElementById("NODO").value = "AZUL";


})

document.getElementById("BORRAR").addEventListener('click', () => {

    document.getElementById("NODO").value = "";
})



//Funciones