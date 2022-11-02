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

    document.getElementById("FRECUENCIA").disabled = false;
    document.getElementById("ARMADO").disabled = false;


    if (document.getElementById("TIPO").value >= 9) {

        let Tipo = document.getElementById("TIPO").value;

        if (Tipo == 9) {
            ModoFTTH();
        }
        if (Tipo == 10) {
            ModoFTTH();
        }
        if (Tipo == 11) {
            ModoFTTH();
        }
        if (Tipo == 12) {
            ModoFTTH();
        }
        if (Tipo == 13) {
            ModoFTTH();
        }

        return
    }

    if ((document.getElementById("TIPO").value <= 8) && (document.getElementById("FRECUENCIA").value != "") && (document.getElementById("ARMADO").value != "")) {

        let Tipo = document.getElementById("TIPO").value;
        let Armado = document.getElementById("ARMADO").value;

        if (Tipo == 1) {
            ModoHFC();
            document.getElementById("FRECUENCIA").value = "1"
            OcultarAMPLIFICADOR();
            OcultarVALORES();
        }
        if ((Tipo == 2) && (Armado == "EXTERIOR")) {
            ModoHFC();
            document.getElementById("FRECUENCIA").value = "2"
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 2) && (Armado == "MONTANTE")) {
            ModoHFC();
            document.getElementById("FRECUENCIA").value = "2"
            OcultarTAPA();
        }
        if ((Tipo == 3) && (Armado == "EXTERIOR")) {
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 3) && (Armado == "MONTANTE")) {
            ModoHFC();
            OcultarTAPA();
        }
        if ((Tipo == 4) && (Armado == "EXTERIOR")) {
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 4) && (Armado == "MONTANTE")) {
            ModoHFC();
            OcultarTAPA();
        }
        if ((Tipo == 5) && (Armado == "EXTERIOR")) {
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 5) && (Armado == "MONTANTE")) {
            ModoHFC();
            OcultarTAPA();
        }
        if ((Tipo == 6) && (Armado == "EXTERIOR")) {
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 7) && (Armado == "EXTERIOR")) {
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
        }
        if ((Tipo == 8) && (Armado == "EXTERIOR")) {
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
        }

        return
    }

})


document.getElementById("SUGERIR").addEventListener('click', () => {
    if (rotar == 2) {
        document.getElementById("POSTE").value = document.getElementById("ENTRECALLE2").value;
        rotar = 0;
        return;
    }

    if (rotar == 1) {
        document.getElementById("POSTE").value = document.getElementById("ENTRECALLE1").value;
        rotar = 2;
        return;
    }

    if (rotar == 0) {
        let cadena = document.getElementById("DIRECCION").value;
        for (let i = cadena.length; i > 0; i--) {
            if (cadena[i] == " ") {
                document.getElementById("POSTE").value = cadena.slice(0, i);
                rotar = 1;
                return;
            }
        }
    }
})


document.getElementById("GENERAR").addEventListener('click', () => {

    let FORMATO = `Motivo: -------------\nDistribución: ${document.getElementById("ARMADO").value}\nID: ${document.getElementById("ID").value}\nCantidad de pisos: ${document.getElementById("PISOS").value}\nCantidad de UF: ${document.getElementById("UF").value}\nNodo: ${document.getElementById("NODO").value}\nDirección: ${document.getElementById("DIRECCION").value}\nEntre calles: ${document.getElementById("ENTRECALLE1").value.toUpperCase()} y ${document.getElementById("ENTRECALLE2").value.toUpperCase()}\nPoste: ${document.getElementById("POSTE").value}\nRG11: ${document.getElementById("METROS").value} metros\n`;


    document.getElementById("TEXTO").value = FORMATO;
})

document.getElementById("COPIAR1").addEventListener('click', () => {

    var codigoACopiar1 = document.getElementById('TEXTO');
    codigoACopiar1.select();
    codigoACopiar1.setSelectionRange(0, 99999);

    document.execCommand('copy');

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

