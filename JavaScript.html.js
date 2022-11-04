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
let mensaje = "";
let motivo = "";
let FORMATO = "";
let tipoTKT = "";




//Star
window.addEventListener('DOMContentLoaded', () => {
    //alert("Se cargo la pagina");
    ModoInicio();
})



//Eventos


document.getElementById("TOP").addEventListener('change', () => {

    document.getElementById("TECNOLOGIA").disabled = false;
    document.getElementById("ARMADO").disabled = false;
    document.getElementById("POSTE").disabled = false;


    if (document.getElementById("TIPO").value >= 12) {

        let Tipo = document.getElementById("TIPO").value;

        if (Tipo == 12) {
            ModoFTTH();
            motivo = " Detalle de Empalme FTTH";
        }
        if (Tipo == 13) {
            ModoFTTH();
            motivo = " Iluminacion de Caja FTTH";
        }
        if (Tipo == 14) {
            ModoFTTH();
            motivo = " Iluminacion + Empalme FTTH";
        }
        if (Tipo == 15) {
            ModoFTTH();
            motivo = " Extension de RED FTTH";
        }
        if (Tipo == 16) {
            ModoFTTH();
            motivo = " Reforma civil FTTH";
        }

        return
    }

    if ((document.getElementById("TIPO").value <= 11) && (document.getElementById("TECNOLOGIA").value != "") && (document.getElementById("ARMADO").value != "")) {

        let Tipo = document.getElementById("TIPO").value;
        let Armado = document.getElementById("ARMADO").value;
        let tecno = document.getElementById("TECNOLOGIA").value;
        MostrarOBSERVACIONES();

        if (Tipo == 1) {
            tipoTKT = "NoHayTapHot";
            ModoHFC();
            document.getElementById("TECNOLOGIA").value = "1";
            OcultarAMPLIFICADOR();
            OcultarVALORES();
            motivo = " No hay Hot Tap disponible ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 2) && (Armado == "EXTERIOR")) {
            tipoTKT = "ComunExterior";
            ModoHFC();
            document.getElementById("TECNOLOGIA").value = "2";
            OcultarTAPA();
            OcultarVALORES();
            motivo = " FALTA REDUCCIÓN EDIFICIO NO CONTEMPLADO ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 2) && (Armado == "MONTANTE")) {
            tipoTKT = "ComunMontante";
            ModoHFC();
            document.getElementById("TECNOLOGIA").value = "2";
            OcultarTAPA();
            motivo = " FALTA REDUCCIÓN EDIFICIO NO CONTEMPLADO ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 3) && (Armado == "EXTERIOR")) {
            tipoTKT = "ComunExterior";
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
            document.getElementById("TECNOLOGIA").value = "1";
            motivo = " ZONA HOT TAP SIN TOMA 220V DISPONIBLE EN EL EDIFICIO ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 3) && (Armado == "MONTANTE")) {
            tipoTKT = "ComunMontante";
            ModoHFC();
            OcultarTAPA();
            document.getElementById("TECNOLOGIA").value = "1";
            motivo = " ZONA HOT TAP SIN TOMA 220V DISPONIBLE EN EL EDIFICIO ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 4) && (Armado == "EXTERIOR")) {
            tipoTKT = "ComunExterior";
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
            motivo = " Niveles fuera de rango";
            mensaje = "";
        }
        if ((Tipo == 4) && (Armado == "MONTANTE")) {
            tipoTKT = "ComunMontante";
            ModoHFC();
            OcultarTAPA();
            motivo = " Niveles fuera de rango";
            mensaje = "";
        }
        if ((Tipo == 5) && (tecno == "1")) {
            tipoTKT = "EspecialZonaTapHot";
            ModoHFC();
            OcultarVALORES();
            motivo = " Reforma Civil";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO LA REFORMA CIVIL A REALIZAR) ";
        }
        if ((Tipo == 5) && (tecno == "2")) {
            tipoTKT = "EspecialZonaReduccion";
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
            motivo = " Reforma Civil";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO LA REFORMA CIVIL A REALIZAR) ";
        }
        if (Tipo == 6) {
            tipoTKT = "ColocacionColumnas";
            ModoHFC();
            OcultarTAPA();
            OcultarAMPLIFICADOR();
            OcultarVALORES();
            motivo = " Colocación de Columnas y Postes";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE DE INTERES, COLUMNA/POSTE A REEMPLAZAR O INDICAR ZONA A POSTEAR) ";
            document.getElementById("POSTE").disabled = true;

        }
        if ((Tipo == 7) && (tecno == "1")) {
            tipoTKT = "EspecialZonaTapHot";
            ModoHFC();
            OcultarVALORES();
            motivo = " EDIFICIO EN ZONA HATCH";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ANTES DE GENERAR EL TICKET SE DEBE REALIZAR RELEVAMIENTO DE LA ZONA. DICHO RELEVAMIENTO SE DEBE ADJUNTAR AL TICKET EN UN CROQUIS INDICANDO LOTE A REALIZAR LA REFORMA Y SI HAY APOYOS EXISTENTES O SI HAY QUE COLOCAR APOYOS, TENIENDO EN CUENTA SI LA RED DEBE REALIZAR UN CRUCE, Y TODO LO NECESARIO PARA REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 7) && (tecno == "2")) {
            tipoTKT = "EspecialZonaReduccion";
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
            motivo = " EDIFICIO EN ZONA HATCH";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ANTES DE GENERAR EL TICKET SE DEBE REALIZAR RELEVAMIENTO DE LA ZONA. DICHO RELEVAMIENTO SE DEBE ADJUNTAR AL TICKET EN UN CROQUIS INDICANDO LOTE A REALIZAR LA REFORMA Y SI HAY APOYOS EXISTENTES O SI HAY QUE COLOCAR APOYOS, TENIENDO EN CUENTA SI LA RED DEBE REALIZAR UN CRUCE, Y TODO LO NECESARIO PARA REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 8) && (tecno == "1")) {
            tipoTKT = "EspecialZonaTapHot";
            ModoHFC();
            OcultarVALORES();
            motivo = " EDIFICIO FUERA DE NODO";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ANTES DE GENERAR EL TICKET SE DEBE REALIZAR RELEVAMIENTO DE LA ZONA. DICHO RELEVAMIENTO SE DEBE ADJUNTAR AL TICKET EN UN CROQUIS INDICANDO LOTE A REALIZAR LA REFORMA Y SI HAY APOYOS EXISTENTES O SI HAY QUE COLOCAR APOYOS, TENIENDO EN CUENTA SI LA RED DEBE REALIZAR UN CRUCE, Y TODO LO NECESARIO PARA REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 8) && (tecno == "2")) {
            tipoTKT = "EspecialZonaReduccion";
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
            motivo = " EDIFICIO FUERA DE NODO";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ANTES DE GENERAR EL TICKET SE DEBE REALIZAR RELEVAMIENTO DE LA ZONA. DICHO RELEVAMIENTO SE DEBE ADJUNTAR AL TICKET EN UN CROQUIS INDICANDO LOTE A REALIZAR LA REFORMA Y SI HAY APOYOS EXISTENTES O SI HAY QUE COLOCAR APOYOS, TENIENDO EN CUENTA SI LA RED DEBE REALIZAR UN CRUCE, Y TODO LO NECESARIO PARA REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 9) && (Armado == "EXTERIOR")) {
            tipoTKT = "NoHayLinga";
            ModoHFC();
            OcultarTAPA();
            OcultarAMPLIFICADOR();
            OcultarVALORES();
            motivo = " No hay Linga (Edificio ya contemplado)";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
        }
        if ((Tipo == 10) && (Armado == "EXTERIOR")) {
            tipoTKT = "NoHayLinga";
            ModoHFC();
            OcultarTAPA();
            OcultarVALORES();
            document.getElementById("TECNOLOGIA").value = "1";
            motivo = " Cambio del PowerBlocking";
            mensaje = "";
        }
        if (Tipo == 11) {
            tipoTKT = "NoHayLinga";
            ModoHFC();
            OcultarTAPA();
            OcultarAMPLIFICADOR();
            OcultarVALORES();
            motivo = " Problemas con el plano de red";
            mensaje = "";
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

document.getElementById("FORMULARIO").addEventListener('submit', () => {


    if (validarCampos()) {
        alert("Debe completar todos los campos")
        return

    } else {

        document.getElementById("GENERAR").disabled = true;
        setTimeout(function () {
            //window.alert("Gestión cargada correctamente");
            document.getElementById("GENERAR").disabled = false;
        }, 2000);

        let datoID = document.getElementById("ID").value;
        let datoPISOS = document.getElementById("PISOS").value;
        let datoUF = document.getElementById("UF").value;
        let datoNODO = document.getElementById("NODO").value;
        let datoDIRECCION = document.getElementById("DIRECCION").value;
        let datoENTRECALLE1 = document.getElementById("ENTRECALLE1").value;
        let datoENTRECALLE2 = document.getElementById("ENTRECALLE2").value;
        let datoPOSTE = document.getElementById("POSTE").value;
        let datoMETROS = document.getElementById("METROS").value;
        let datoTAPHOT = document.getElementById("TAPHOT").value;
        let datoAMPLI = document.getElementById("AMPLI").value;
        let datoCH116 = document.getElementById("CH116").value;
        let datoCH3 = document.getElementById("CH3").value;
        let datoRETORNO = document.getElementById("RETORNO").value;
        let datoOBS = document.getElementById("OBS").value;
        let datoDISTRIBUCION = document.getElementById("ARMADO").value;

        if (document.getElementById("TECNOLOGIA").value == 1) {
            let datoTECNOLOGIA = "ZONA HOT TAP";
        } else { let datoTECNOLOGIA = "ZONA DE REDUCCIONES"; }



        switch (tipoTKT) {
            case "NoHayTapHot":
                FORMATO = `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nCapacidad de Tap Hot: ${datoTAPHOT}\n`;
                break;

            case "ComunExterior":
                FORMATO = `Motivo: ${motivo}\nDistribución: ${datoDISTRIBUCION}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nDisponibilidad para instalar Amplificador 90 [V]: ${datoAMPLI}\n`;
                break;
            case "ComunMontante":
                FORMATO = `Motivo: ${motivo}\nDistribución: ${datoDISTRIBUCION}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nDisponibilidad para instalar Amplificador 90 [V]: ${datoAMPLI}\nValores que debe entregar la red:\nCH116: ${datoCH116}\nCH3: ${datoCH3}\nRETORNO: ${datoRETORNO}\n`;

            case "EspecialZonaTapHot":
                FORMATO = `Motivo: ${motivo}\nTecnología: ${datoTECNOLOGIA}\nDistribución: ${datoDISTRIBUCION}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nCapacidad de Tap Hot: ${datoTAPHOT}\nDisponibilidad para instalar Amplificador 90 [V]: ${datoAMPLI}\nObservaciones: ${datoOBS}\n`;
                break;
            case "EspecialZonaReduccion":
                FORMATO = `Motivo: ${motivo}\nTecnología: ${datoTECNOLOGIA}\nDistribución: ${datoDISTRIBUCION}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nDisponibilidad para instalar Amplificador 90 [V]: ${datoAMPLI}\nObservaciones: ${datoOBS}\n`;
                break;

            case "ColocacionColumnas":
                FORMATO = `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nRG11 (mtrs): ${datoMETROS}\nObservaciones: ${datoOBS}\n`;
                break;

            case "NoHayLinga":
                FORMATO = `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nObservaciones: ${datoOBS}\n`;
                break;

        }


        document.getElementById("TEXTO").value = FORMATO;
        if (mensaje != "") {
            alert(mensaje);
        }



    }



})
/*
document.getElementById("GENERAR").addEventListener('click', () => {

    // Validar campos vacios

    //pasar los valores de ID a VARIABLES

    //depende del tipo generar el template

    // depende del tipo indicar los pasos en MOICA (o probar hacerlo cuando cambia el tipo de TKT en TOP)

    let FORMATO = `Motivo: ${motivo}\nDistribución: ${document.getElementById("ARMADO").value}\nID: ${document.getElementById("ID").value}\nCantidad de pisos: ${document.getElementById("PISOS").value}\nCantidad de UF: ${document.getElementById("UF").value}\nNodo: ${document.getElementById("NODO").value}\nDirección: ${document.getElementById("DIRECCION").value}\nEntre calles: ${document.getElementById("ENTRECALLE1").value.toUpperCase()} y ${document.getElementById("ENTRECALLE2").value.toUpperCase()}\nPoste: ${document.getElementById("POSTE").value}\nRG11: ${document.getElementById("METROS").value} metros\n`;


    document.getElementById("TEXTO").value = FORMATO;
})
*/
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
    document.getElementById("TECNOLOGIA").disabled = true;
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

function validarCampos() {

    if (document.getElementById("TIPO").value <= 11) {

        if ((document.getElementById("ID").value == "") || (document.getElementById("NODO").value == "") || (document.getElementById("DIRECCION").value == "") || (document.getElementById("ENTRECALLE1").value == "") || (document.getElementById("ENTRECALLE2").value == "") || (document.getElementById("METROS").value == "") || (document.getElementById("PISOS").value == "") || (document.getElementById("UF").value == "")) {
            return true
        }
        else {
            if ((document.getElementById("TIPO").value == 1) && ((document.getElementById("POSTE").value == "") || (document.getElementById("TAPHOT").value == ""))) {
                return true
            }
            if (((document.getElementById("TIPO").value == 2) || (document.getElementById("TIPO").value == 3) || (document.getElementById("TIPO").value == 4)) && ((document.getElementById("POSTE").value == "") || (document.getElementById("AMPLI").value == ""))) {
                return true
            }
            if ((document.getElementById("TIPO").value == 5) || (document.getElementById("TIPO").value == 7) || (document.getElementById("TIPO").value == 8)) {

                if ((document.getElementById("POSTE").value == "") || (document.getElementById("OBS").value == "") || (document.getElementById("TECNOLOGIA").value == 1) && (document.getElementById("TAPHOT").value == "")) {
                    return true
                }
                if ((document.getElementById("POSTE").value == "") || (document.getElementById("OBS").value == "") || (document.getElementById("TECNOLOGIA").value == 2) && (document.getElementById("AMPLI").value == "")) {
                    return true
                }
            }
            if ((document.getElementById("TIPO").value == 6) && (document.getElementById("OBS").value == "")) {
                return true
            }
            if ((document.getElementById("TIPO").value == 9) && ((document.getElementById("POSTE").value == "") || (document.getElementById("OBS").value == ""))) {
                return true
            }
            if (((document.getElementById("TIPO").value == 10)) && ((document.getElementById("POSTE").value == "") || (document.getElementById("AMPLI").value == "") || (document.getElementById("OBS").value == ""))) {
                return true
            }
            if ((document.getElementById("TIPO").value == 11) && (document.getElementById("OBS").value == "")) {
                return true
            }
            return false
        }
    }


}

