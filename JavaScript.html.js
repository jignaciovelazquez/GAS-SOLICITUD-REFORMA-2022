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

window.addEventListener('DOMContentLoaded', () => {

    //alert("Se cargo la pagina");

    ModoInicio();

})



//Eventos







document.getElementById("TOP").addEventListener('change', () => {

    console.log("Se persibio un cambio");
    document.getElementById("FRECUENCIA").disabled = false;
    document.getElementById("ARMADO").disabled = false;


    if (document.getElementById("TIPO").value >= 6) {

        let Tipo = document.getElementById("TIPO").value;
        console.log("ENTRO");
        document.getElementById("NODO").value = "ROJO";

        if (Tipo == 6) {
            ModoFTTH();
        }
        if (Tipo == 7) {
            ModoFTTH();
        }
        if (Tipo == 8) {
            ModoFTTH();
        }
        if (Tipo == 9) {
            ModoFTTH();
        }
        if (Tipo == 10) {
            ModoFTTH();
        }

        return
    }

    if ((document.getElementById("TIPO").value <= 5) && (document.getElementById("FRECUENCIA").value != "") && (document.getElementById("ARMADO").value != "")) {

        let Tipo = document.getElementById("TIPO").value;
        let Armado = document.getElementById("ARMADO").value;

        if (Tipo == 1) {
            ModoHFC();
            document.getElementById("FRECUENCIA").value = "1"
            OcultarAMPLIFICADOR();
            OcultarVALORES();
        }
        if ((Tipo == 2) && (Armado == 1)) {
            ModoHFC();
            document.getElementById("FRECUENCIA").value = "2"
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 2) && (Armado == 2)) {
            ModoHFC();
            document.getElementById("FRECUENCIA").value = "2"
            OcultarTAPA();
        }
        if ((Tipo == 3) && (Armado == 1)) {
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 3) && (Armado == 2)) {
            ModoHFC();
            OcultarTAPA();
        }
        if ((Tipo == 4) && (Armado == 1)) {
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 4) && (Armado == 2)) {
            ModoHFC();
            OcultarTAPA();
        }
        if ((Tipo == 5) && (Armado == 1)) {
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 5) && (Armado == 2)) {
            ModoHFC();
            OcultarTAPA();
        }

        return
    }

})

document.getElementById("GENERAR").addEventListener('click', () => {
    document.getElementById("NODO").value = "AZUL";
})


document.getElementById("BORRAR").addEventListener('click', () => {
    Limpiar();
})


//Funciones

const ModoInicio = () => {
    document.getElementById("InForHFC").classList.add("d-none");
    document.getElementById("InForHFC").classList.remove("d-block");
    document.getElementById("InForFTTH").classList.add("d-none");
    document.getElementById("InForFTTH").classList.remove("d-block");
    OcultarOBSERVACIONES();
}

const ModoHFC = () => {
    document.getElementById("InForHFC").classList.remove("d-none");
    document.getElementById("InForHFC").classList.add("d-block");
    document.getElementById("InForFTTH").classList.remove("d-block");
    document.getElementById("InForFTTH").classList.add("d-none");
    document.getElementById("TAPA").classList.add("d-block");
    document.getElementById("TAPA").classList.remove("d-none");
    document.getElementById("VALORES").classList.add("d-block");
    document.getElementById("VALORES").classList.remove("d-none");
    document.getElementById("AMPLIFICADOR").classList.add("d-block");
    document.getElementById("AMPLIFICADOR").classList.remove("d-none");
}


const MostrarOBSERVACIONES = () => {
    document.getElementById("OBSERVACION").classList.add("d-block");
    document.getElementById("OBSERVACION").classList.remove("d-none");
}

const OcultarOBSERVACIONES = () => {
    document.getElementById("OBSERVACION").classList.remove("d-block");
    document.getElementById("OBSERVACION").classList.add("d-none");
}

const OcultarTAPA = () => {
    document.getElementById("TAPA").classList.remove("d-block");
    document.getElementById("TAPA").classList.add("d-none");
}

const OcultarVALORES = () => {
    document.getElementById("VALORES").classList.remove("d-block");
    document.getElementById("VALORES").classList.add("d-none");
}

const OcultarAMPLIFICADOR = () => {
    document.getElementById("AMPLIFICADOR").classList.remove("d-block");
    document.getElementById("AMPLIFICADOR").classList.add("d-none");
}

const ModoFTTH = () => {
    document.getElementById("InForHFC").classList.remove("d-block");
    document.getElementById("InForHFC").classList.add("d-none");
    document.getElementById("InForFTTH").classList.remove("d-none");
    document.getElementById("InForFTTH").classList.add("d-block");
    document.getElementById("FRECUENCIA").disabled = true;
    document.getElementById("ARMADO").disabled = true;

}

const Limpiar = () => {
    document.getElementById("ID").value = "";
    document.getElementById("NODO").value = "";
    document.getElementById("NODO").value = "";
    document.getElementById("NODO").value = "";
    document.getElementById("NODO").value = "";
    document.getElementById("NODO").value = "";
    document.getElementById("NODO").value = "";
    document.getElementById("NODO").value = "";
    document.getElementById("NODO").value = "";

}

