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
let N = 1;
let M = 1;
let T = 1;





//Star
window.addEventListener('DOMContentLoaded', () => {
    //alert("Se cargo la pagina");
    ModoInicio();

    const toast = new bootstrap.Toast(document.getElementById("liveToast"));
    toast.show();
})



//Eventos










document.getElementById("BUSCAR").addEventListener('click', () => {

    document.getElementById("BUSCAR").disabled = true;
    setTimeout(function () {
        //window.alert("Gestión cargada correctamente");
        document.getElementById("BUSCAR").disabled = false;
    }, 2000);

    if (document.getElementById("ID").value == "") {
        window.alert("Debes ingresar un numero de ID");
        return
    }
    let ID = document.getElementById("ID").value;
    google.script.run.withSuccessHandler(function (output) {
        document.getElementById("DIRECCION").value = output[1];
        document.getElementById("NODO").value = output[0];

        if ((document.getElementById("DIRECCION").value == "") && (document.getElementById("NODO").value == "")) {
            window.alert(`El ID: ${ID} no fue ubicado dentro de la Planilla de Produccion`);
            return
        }
    }).buscarID(ID);

})


document.getElementById("TOP").addEventListener('change', () => {


    document.getElementById("TECNOLOGIA").disabled = false;
    document.getElementById("ARMADO").disabled = false;
    document.getElementById("POSTE").disabled = false;
    document.getElementById("EJEMPLO2").textContent = "";
    PasosMoicaFTTH();


    if (document.getElementById("TIPO").value >= 12) {

        ModoFTTH();
        OcultarCAJASUGERIDA();
        let Tipo = document.getElementById("TIPO").value;

        if (Tipo == 12) {
            tipoTKT = "FTTHSC";
            MostrarDATOSPARASC();
            motivo = "Detalle de Empalme FTTH";
            mensaje = "";
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaAsunto").value = "Solicitud de Conexión de red FTTH";
            document.getElementById("moicaProblema").value = "ARMADO - Conexción de Edficios a red FTTH";
        }
        if (Tipo == 13) {
            tipoTKT = "FTTHFC";
            MostrarCAJAPARAILUM();
            motivo = "Iluminacion de Caja FTTH";
            mensaje = "";
            document.getElementById("MTSFTTH").disabled = true;
            document.getElementById("CONTEMPLADO").disabled = true;
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaAsunto").value = "Iluminación de FO para Caja HUB - edificios";
            document.getElementById("moicaProblema").value = "ARMADO - Iluminación de FO para Caja Hub para Edificios";
        }
        if (Tipo == 14) {
            tipoTKT = "FTTHextensionRED";
            motivo = "Extension de Red FTTH";
            mensaje = "";
            document.getElementById("MTSFTTH").disabled = true;
            document.getElementById("CONTEMPLADO").disabled = true;
            document.getElementById("OBS").value = "Para el edificio en cuestión se solicita contemplar la opción de extender la red sobre ";
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if (Tipo == 15) {
            tipoTKT = "FTTHreformaCIVIL";
            motivo = "FTTH - Reforma Civil";
            mensaje = "";
            document.getElementById("MTSFTTH").disabled = true;
            document.getElementById("CONTEMPLADO").disabled = true;
            document.getElementById("OBS").value = "Para el edificio en cuestión se solicita contemplar la ejecucion de una Obra Civil para ";
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if (Tipo == 16) {
            tipoTKT = "FTTHampliacion";
            MostrarDATOSPARASC();
            MostrarCAJASUGERIDA();
            motivo = "FTTH - Gestion de Ampliacion";
            mensaje = "";
            document.getElementById("CONTEMPLADO").disabled = true;
            document.getElementById("OBS").value = "";
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
            document.getElementById("CONTEMPLADO").value = "No";

        }
        if (Tipo == 17) {
            tipoTKT = "FTTHarmadoSC";
            MostrarDATOSPARASC();
            motivo = "Detalle de Empalme FTTH para edificio ya Armado";
            mensaje = "";
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if (Tipo == 18) {
            tipoTKT = "FTTHarmadoFC";
            MostrarCAJAPARAILUM();
            motivo = "Iluminacion de Caja FTTH para edificio ya Armado";
            mensaje = "";
            document.getElementById("MTSFTTH").disabled = true;
            document.getElementById("CONTEMPLADO").disabled = true;
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
    }

    if ((document.getElementById("TIPO").value <= 11) && (document.getElementById("TECNOLOGIA").value != "") && (document.getElementById("ARMADO").value != "")) {

        let Tipo = document.getElementById("TIPO").value;
        let Armado = document.getElementById("ARMADO").value;
        let tecno = document.getElementById("TECNOLOGIA").value;
        ModoHFC();
        PasosMoicaHFC();

        if (Tipo == 1) {
            tipoTKT = "NoHayTapHot";
            document.getElementById("TECNOLOGIA").value = "1";
            OcultarAMPLIFICADOR();
            OcultarVALORES();
            motivo = " No hay Hot Tap disponible ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Colocación de Hot Tap";
        }
        if ((Tipo == 2) && (Armado == "EXTERIOR")) {
            tipoTKT = "ComunExterior";
            document.getElementById("TECNOLOGIA").value = "2";
            OcultarTAPA();
            OcultarVALORES();
            motivo = " FALTA REDUCCIÓN EDIFICIO NO CONTEMPLADO ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if ((Tipo == 2) && (Armado == "MONTANTE")) {
            tipoTKT = "ComunMontante";
            document.getElementById("TECNOLOGIA").value = "2";
            OcultarTAPA();
            motivo = " FALTA REDUCCIÓN EDIFICIO NO CONTEMPLADO ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
            document.getElementById("EJEMPLO1").textContent = "No requiere Observacion adicional";
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if ((Tipo == 3) && (Armado == "EXTERIOR")) {
            tipoTKT = "ComunExterior";
            OcultarTAPA();
            OcultarVALORES();
            document.getElementById("TECNOLOGIA").value = "1";
            motivo = " ZONA HOT TAP SIN TOMA 220V DISPONIBLE EN EL EDIFICIO ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
            document.getElementById("EJEMPLO1").textContent = `Encargado o Administracion indican que no esta permitido tomar tension del edificio.`;
            document.getElementById("EJEMPLO2").textContent = `El edificio no cuenta con tomas de tension disponibles en el lugar donde se debe realizar la instalación.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if ((Tipo == 3) && (Armado == "MONTANTE")) {
            tipoTKT = "ComunMontante";
            OcultarTAPA();
            document.getElementById("TECNOLOGIA").value = "1";
            motivo = " ZONA HOT TAP SIN TOMA 220V DISPONIBLE EN EL EDIFICIO ";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
            document.getElementById("EJEMPLO1").textContent = `Encargado o Administracion indican que no esta permitido tomar tension del edificio.`;
            document.getElementById("EJEMPLO2").textContent = `El edificio no cuenta con tomas de tension disponibles en el lugar donde se debe realizar la instalación.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if ((Tipo == 4) && (Armado == "EXTERIOR")) {
            tipoTKT = "ComunExterior";
            OcultarTAPA();
            OcultarVALORES();
            motivo = " Niveles fuera de rango";
            mensaje = "";
            document.getElementById("EJEMPLO1").textContent = `Fuera de rango 1.`;
            document.getElementById("EJEMPLO2").textContent = `Fuera de rango 2.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if ((Tipo == 4) && (Armado == "MONTANTE")) {
            tipoTKT = "ComunMontante";
            OcultarTAPA();
            motivo = " Niveles fuera de rango";
            mensaje = "";
            document.getElementById("EJEMPLO1").textContent = `Fuera de rango 1.`;
            document.getElementById("EJEMPLO2").textContent = `Fuera de rango 2.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if ((Tipo == 5) && (tecno == "1")) {
            tipoTKT = "EspecialZonaTapHot";
            OcultarVALORES();
            motivo = " Reforma Civil";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO LA REFORMA CIVIL A REALIZAR) ";
            document.getElementById("OBS").value = "Para el Edificio se debe realizar la siguiente obra civil: "
            document.getElementById("EJEMPLO1").textContent = `Se requiere reforma civil sobre vereda para conectar la camara ubicada en altura 1 hasta la camara en altura 2. `;
            document.getElementById("EJEMPLO2").textContent = `Se requiere una reforma civil para colocar los tritubos desde la camara ubicada frente al edificio hasta la fachada izquierda para realizar acometida.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Reforma Civil";
        }
        if ((Tipo == 5) && (tecno == "2")) {
            tipoTKT = "EspecialZonaReduccion";
            OcultarTAPA();
            OcultarVALORES();
            motivo = " Reforma Civil";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO LA REFORMA CIVIL A REALIZAR) ";
            document.getElementById("OBS").value = "Para el Edificio se debe realizar la siguiente obra civil: "
            document.getElementById("EJEMPLO1").textContent = `Se requiere reforma civil sobre vereda para conectar la camara ubicada en altura 1 hasta la camara en altura 2. `;
            document.getElementById("EJEMPLO2").textContent = `Se requiere una reforma civil para colocar los tritubos desde la camara ubicada frente al edificio hasta la fachada izquierda para realizar acometida.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Reforma Civil";
        }
        if (Tipo == 6) {
            tipoTKT = "ColocacionColumnas";
            OcultarTAPA();
            OcultarAMPLIFICADOR();
            OcultarVALORES();
            motivo = " Colocación de Columnas y Postes";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE DE INTERES, COLUMNA/POSTE A REEMPLAZAR O INDICAR ZONA A POSTEAR) ";
            document.getElementById("POSTE").disabled = true;
            document.getElementById("OBS").value = "(ACÁ SE DEBE EXPLICAR LA PROBLEMÁTICA, INDICAR DE QUÉ PUNTO A QUE PUNTO SE NECESITA LA COLOCACIÓN DE COLUMNAS/POSTES) ";
            document.getElementById("EJEMPLO1").textContent = `Se requiere Colocar columnas y postes.`;
            document.getElementById("EJEMPLO2").textContent = `Se requiere Colocar columnas y postes.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Colocación de Columnas y Postes";

        }
        if ((Tipo == 7) && (tecno == "1")) {
            tipoTKT = "EspecialZonaTapHot";
            OcultarVALORES();
            motivo = " EDIFICIO EN ZONA HATCH";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ANTES DE GENERAR EL TICKET SE DEBE REALIZAR RELEVAMIENTO DE LA ZONA. DICHO RELEVAMIENTO SE DEBE ADJUNTAR AL TICKET EN UN CROQUIS INDICANDO LOTE A REALIZAR LA REFORMA Y SI HAY APOYOS EXISTENTES O SI HAY QUE COLOCAR APOYOS, TENIENDO EN CUENTA SI LA RED DEBE REALIZAR UN CRUCE, Y TODO LO NECESARIO PARA REALIZAR LA REFORMA) ";
            document.getElementById("EJEMPLO1").textContent = `Edificio localizado en Zona Hatch.`;
            document.getElementById("EJEMPLO2").textContent = `Edificio localizado en Zona Hatch.`;
            document.getElementById("moicaProblema").value = "YE - Armado HFC - Edificio en Zona Hatch";
        }
        if ((Tipo == 7) && (tecno == "2")) {
            tipoTKT = "EspecialZonaReduccion";
            OcultarTAPA();
            OcultarVALORES();
            motivo = " EDIFICIO EN ZONA HATCH";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ANTES DE GENERAR EL TICKET SE DEBE REALIZAR RELEVAMIENTO DE LA ZONA. DICHO RELEVAMIENTO SE DEBE ADJUNTAR AL TICKET EN UN CROQUIS INDICANDO LOTE A REALIZAR LA REFORMA Y SI HAY APOYOS EXISTENTES O SI HAY QUE COLOCAR APOYOS, TENIENDO EN CUENTA SI LA RED DEBE REALIZAR UN CRUCE, Y TODO LO NECESARIO PARA REALIZAR LA REFORMA) ";
            document.getElementById("EJEMPLO1").textContent = `Edificio localizado en Zona Hatch.`;
            document.getElementById("EJEMPLO2").textContent = `Edificio localizado en Zona Hatch.`;
            document.getElementById("moicaProblema").value = "YE - Armado HFC - Edificio en Zona Hatch";
        }
        if ((Tipo == 8) && (tecno == "1")) {
            tipoTKT = "EspecialZonaTapHot";
            OcultarVALORES();
            motivo = " EDIFICIO FUERA DE NODO";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ANTES DE GENERAR EL TICKET SE DEBE REALIZAR RELEVAMIENTO DE LA ZONA. DICHO RELEVAMIENTO SE DEBE ADJUNTAR AL TICKET EN UN CROQUIS INDICANDO LOTE A REALIZAR LA REFORMA Y SI HAY APOYOS EXISTENTES O SI HAY QUE COLOCAR APOYOS, TENIENDO EN CUENTA SI LA RED DEBE REALIZAR UN CRUCE, Y TODO LO NECESARIO PARA REALIZAR LA REFORMA) ";
            document.getElementById("EJEMPLO1").textContent = `Edificio fuera de Nodo.`;
            document.getElementById("EJEMPLO2").textContent = `Edificio fuera de Nodo.`;
            document.getElementById("moicaProblema").value = "YE - Armado HFC - Edificio Fuera de Nodo";
        }
        if ((Tipo == 8) && (tecno == "2")) {
            tipoTKT = "EspecialZonaReduccion";
            OcultarTAPA();
            OcultarVALORES();
            motivo = " EDIFICIO FUERA DE NODO";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ANTES DE GENERAR EL TICKET SE DEBE REALIZAR RELEVAMIENTO DE LA ZONA. DICHO RELEVAMIENTO SE DEBE ADJUNTAR AL TICKET EN UN CROQUIS INDICANDO LOTE A REALIZAR LA REFORMA Y SI HAY APOYOS EXISTENTES O SI HAY QUE COLOCAR APOYOS, TENIENDO EN CUENTA SI LA RED DEBE REALIZAR UN CRUCE, Y TODO LO NECESARIO PARA REALIZAR LA REFORMA) ";
            document.getElementById("EJEMPLO1").textContent = `Edificio fuera de Nodo.`;
            document.getElementById("EJEMPLO2").textContent = `Edificio fuera de Nodo.`;
            document.getElementById("moicaProblema").value = "YE - Armado HFC - Edificio Fuera de Nodo";
        }
        if ((Tipo == 9) && (Armado == "EXTERIOR")) {
            tipoTKT = "NoHayLinga";
            OcultarTAPA();
            OcultarAMPLIFICADOR();
            OcultarVALORES();
            motivo = " No hay Linga (Edificio ya contemplado)";
            mensaje = " (CONDICIONANTE PARA GENERAR TICKET: ADJUNTAR EXTRACTO DE PLANO DEL SERVIDOR INDICANDO EL LOTE Y COLUMNA/POSTE A REALIZAR LA REFORMA) ";
            document.getElementById("OBS").value = "(ACÁ SE DEBE EXPLICAR LA PROBLEMÁTICA, INDICAR DE QUÉ PUNTO A QUE PUNTO SE NECESITA LA  COLOCACIÓN DE LINGA) ";
            document.getElementById("EJEMPLO1").textContent = `No hay linga para realizar la acometida hacia el edificio.`;
            document.getElementById("EJEMPLO2").textContent = `No hay linga para realizar la acometida hacia el edificio.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Linga";
        }
        if ((Tipo == 10) && (Armado == "EXTERIOR")) {
            tipoTKT = "NoHayLinga";
            OcultarTAPA();
            OcultarVALORES();
            document.getElementById("TECNOLOGIA").value = "1";
            motivo = " Cambio del PowerBlocking";
            mensaje = "";
            document.getElementById("EJEMPLO1").textContent = `Se debe sacar el Power Blocking.`;
            document.getElementById("EJEMPLO2").textContent = `Se debe sacar el Power Blocking.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }
        if (Tipo == 11) {
            tipoTKT = "NoHayLinga";
            OcultarTAPA();
            OcultarAMPLIFICADOR();
            OcultarVALORES();
            motivo = " Problemas con el plano de red";
            mensaje = "";
            document.getElementById("EJEMPLO1").textContent = `El plano cargado en el servidor de planos de red no se visualiza correctamente.`;
            document.getElementById("EJEMPLO2").textContent = `El plano cargado en el servidor de planos de red no posee la informacion de las grillas visibles.`;
            document.getElementById("moicaProblema").value = "YE - Armado/Normalizado HFC - Falta Reducción";
        }

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

document.getElementById("SUGERIR2").addEventListener('click', () => {

    document.getElementById("CAJAFTTH").value = document.getElementById("NODO").value + "-N01-H0" + N;
    N++;
    return;
})

document.getElementById("SUGERIR3").addEventListener('click', () => {

    document.getElementById("CAJASEGUNRELEVO").value = document.getElementById("NODO").value + "-N01-H0" + M;
    M++;
    return;
})

document.getElementById("SUGERIR4").addEventListener('click', () => {

    document.getElementById("CAJAILUMINAR").value = document.getElementById("NODO").value + "-N01-H0" + T;
    T++;
    return;
})

document.getElementById("CONTEMPLADO").addEventListener('change', () => {
    if (document.getElementById("CONTEMPLADO").value == "Si") {
        MostrarCAJATOMA();
        OcultarCAJASUGERIDA();
    }
    if (document.getElementById("CONTEMPLADO").value == "No") {
        MostrarCAJASUGERIDA();
        OcultarCAJATOMA();
    }
})

document.getElementById("CAJAENRELEVO").addEventListener('change', () => {
    if (document.getElementById("CAJAENRELEVO").value == "Si") {
        document.getElementById("CAJASEGUNRELEVO").value = "";
        document.getElementById("LARGOFIBRA").value = "";
        document.getElementById("CAJASEGUNRELEVO").readonly = false;
    }
    if (document.getElementById("CAJAENRELEVO").value == "No") {
        document.getElementById("CAJASEGUNRELEVO").value = "XX";
        document.getElementById("LARGOFIBRA").value = "XX";
        document.getElementById("CAJASEGUNRELEVO").readonly = true;
    }
})

document.getElementById("EDIFPROGRA").addEventListener('change', () => {
    if (document.getElementById("EDIFPROGRA").value == "Si") {
        MostrarFECHAPROGRAM();
    }
    if (document.getElementById("EDIFPROGRA").value == "No") {
        OcultarFECHAPROGRAM();
    }
})

document.getElementById("FECHA").addEventListener('change', () => {
    document.getElementById("EDIFPROGRA").value = "Si";

})

/*
document.getElementById("CAJAENRELEVO").addEventListener('change', () => {

    if (document.getElementById("CAJAENRELEVO").value == "Si") {

        document.getElementById("CAJASEGUNRELEVO").disabled = false;
        document.getElementById("SUGERIR3").disabled = false;


    }

})
*/
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

        FORMATO = "";

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
        let datoPISOSFTTH = document.getElementById("PISOSFTTH").value;
        let datoUFFTTH = document.getElementById("UFFTTH").value;
        let datoMTSFTTH = document.getElementById("MTSFTTH").value;
        let datoCONTEMPLADO = document.getElementById("CONTEMPLADO").value;
        let notaCONTEMPLADO;
        let datoNOTA = "Nota: No se adjunta diseño ya que la complejidad del caso no lo requiere.";
        let datoCAJAFTTH = document.getElementById("CAJAFTTH").value;
        let datoTIPOFIBRA = document.getElementById("TIPOFIBRA").value;
        let datoLARGOFIBRA = ` de ${document.getElementById("LARGOFIBRA").value}m`;
        let datoNTIPOFIBRA = document.getElementById("NTIPOFIBRA").value;
        let datoCAJAENRELEVO = document.getElementById("CAJAENRELEVO").value;
        let datoCAJASEGUNRELEVO = document.getElementById("CAJASEGUNRELEVO").value;
        let datoCAJAILUMINAR = document.getElementById("CAJAILUMINAR").value;



        let datoTKT = document.getElementById("TKT").value;
        let datoTKTPREVIO = document.getElementById("TIPOTKT").value;
        let tktPREVIO = "";

        let datoTECNOLOGIA = "";

        if (document.getElementById("TECNOLOGIA").value == 1) {
            datoTECNOLOGIA = "ZONA HOT TAP";
        } else { datoTECNOLOGIA = "ZONA DE REDUCCIONES"; }






        if (datoCONTEMPLADO == "Si") {
            notaCONTEMPLADO = ` desde la caja ${datoCAJAFTTH}`;
        } else {
            if (datoCAJAENRELEVO == "Si") {
                notaCONTEMPLADO = ` desde el relavamiento indican que se encuentra la caja ${datoCAJASEGUNRELEVO} disponible`;
            } else {
                notaCONTEMPLADO = ` desde el relavamiento NO indican caja disponible`;
            }
        }


        if (document.getElementById("inlineCheckbox1").checked == true) {
            datoNOTA = "Nota: Se adjunta diseño.";
        }

        if ((datoTKT != "") && (datoTKTPREVIO == "Iluminacion CAJA - FTTH")) {
            tktPREVIO = `Nota: Ticket generado en Moica ${datoTKT} Motivo Iluminacion CAJA - FTTH.`;
        }

        if (document.getElementById("EDIFPROGRA").value == "Si") {

            let fecha = document.getElementById("FECHA").value;
            let resFecha = fecha.split("-");
            let reversedFecha = resFecha.reverse();
            let FechaOb = reversedFecha.join('-');

            FORMATO = `EL EDIFICIO ESTA PROGRAMADO PARA EL ${FechaOb}\n`;

        }




        switch (tipoTKT) {
            case "NoHayTapHot":
                FORMATO = FORMATO + `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nCapacidad de Tap Hot: ${datoTAPHOT}\nObservaciones: ${datoOBS}\n`;
                break;

            case "ComunExterior":
                FORMATO = FORMATO + `Motivo: ${motivo}\nDistribución: ${datoDISTRIBUCION}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nDisponibilidad para instalar Amplificador 90 [V]: ${datoAMPLI}\nObservaciones: ${datoOBS}\n`;
                break;
            case "ComunMontante":
                FORMATO = FORMATO + `Motivo: ${motivo}\nDistribución: ${datoDISTRIBUCION}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nDisponibilidad para instalar Amplificador 90 [V]: ${datoAMPLI}\nValores que debe entregar la red:\nCH116: ${datoCH116}\nCH3: ${datoCH3}\nRETORNO: ${datoRETORNO}\nObservaciones: ${datoOBS}\n`;
                break;
            case "EspecialZonaTapHot":
                FORMATO = FORMATO + `Motivo: ${motivo}\nTecnología: ${datoTECNOLOGIA}\nDistribución: ${datoDISTRIBUCION}\nID: ${datoID}\nCantidad de pisos: ${datoPISOS}\nCantidad de UF: ${datoUF}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\nEntre calles: ${datoENTRECALLE1} y ${datoENTRECALLE2}\nPoste: ${datoPOSTE}\nRG11 (mtrs): ${datoMETROS}\nCapacidad de Tap Hot: ${datoTAPHOT}\nDisponibilidad para instalar Amplificador 90 [V]: ${datoAMPLI}\nObservaciones: ${datoOBS}\n`;
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

            case "FTTHSC":
                FORMATO = FORMATO + `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOSFTTH}\nCantidad de UF: ${datoUFFTTH}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\n\n*- Para el Edificio en cuestión se solicita el Detalle de Empalme.\n*- Se necesitan aproximadamente ${datoMTSFTTH} mts para el recorrido interno (desde fachada a caja a instalar, incluyendo 20m para el rollo de ganancia).\n*- En plano de red el edificio ${datoCONTEMPLADO} esta contemplado, ${notaCONTEMPLADO}.\n*- Se recomienda contemplar ${datoNTIPOFIBRA} ${datoTIPOFIBRA}${datoLARGOFIBRA} para el diseño.\n\nObservaciones: ${datoOBS}\n\n${tktPREVIO}\n${datoNOTA}\n`;
                break;

            case "FTTHFC":
                FORMATO = `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOSFTTH}\nCantidad de UF: ${datoUFFTTH}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\n\n*- Para el Edificio en cuestión se solicita la Iluminación de la caja ${datoCAJAILUMINAR} para realizar el respectivo armado.\n\nObservaciones: ${datoOBS}\n\n${datoNOTA}\n`;
                break;

            case "FTTHextensionRED":
                FORMATO = `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOSFTTH}\nCantidad de UF: ${datoUFFTTH}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\n\nObservaciones: ${datoOBS}\n\n${datoNOTA}\n`;
                break;

            case "FTTHreformaCIVIL":
                FORMATO = `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOSFTTH}\nCantidad de UF: ${datoUFFTTH}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\n\nObservaciones: ${datoOBS}\n\n${datoNOTA}\n`;
                break;

            case "FTTHampliacion":
                FORMATO = `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOSFTTH}\nCantidad de UF: ${datoUFFTTH}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\n\n*- Para la AMPLIACION de capacidad del Edificio en cuestión se solicita nuevo Detalle de Empalme.\n*- Se necesitan aproximadamente ${datoMTSFTTH} mts para el recorrido interno (desde fachada a caja a instalar, incluyendo 20m para el rollo de ganancia).\n*-${notaCONTEMPLADO}.\n*- Se recomienda contemplar ${datoNTIPOFIBRA} ${datoTIPOFIBRA}${datoLARGOFIBRA} adicional a lo existente.\n\nObservaciones: ${datoOBS}\n\n${tktPREVIO}\n${datoNOTA}\n`;
                break;

            case "FTTHarmadoSC":
                FORMATO = `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOSFTTH}\nCantidad de UF: ${datoUFFTTH}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\n\n*- Para el Edificio EXPRESS en cuestión se solicita el Detalle de Empalme.\n*- Se necesitan aproximadamente ${datoMTSFTTH} mts para el recorrido interno (desde fachada a caja a instalar, incluyendo 20m para el rollo de ganancia).\n*- En plano de red el edificio ${datoCONTEMPLADO} esta contemplado, ${notaCONTEMPLADO}.\n*- Se recomienda contemplar ${datoNTIPOFIBRA} ${datoTIPOFIBRA}${datoLARGOFIBRA} para el diseño.\n\nObservaciones: ${datoOBS}\n\n${tktPREVIO}\n${datoNOTA}\n`;
                break;

            case "FTTHarmadoFC":
                FORMATO = `Motivo: ${motivo}\nID: ${datoID}\nCantidad de pisos: ${datoPISOSFTTH}\nCantidad de UF: ${datoUFFTTH}\nNodo: ${datoNODO}\nDirección ${datoDIRECCION}\n\n*- Para el Edificio EXPRESS en cuestión se solicita la Iluminación de la caja ${datoCAJAILUMINAR} para realizar el respectivo armado.\n\nObservaciones: ${datoOBS}\n\n${datoNOTA}\n`;
                break;

        }

        document.getElementById("TEXTO").value = FORMATO;
        if (mensaje != "") {
            alert(mensaje);
        }

    }

})

document.getElementById("COPIAR1").addEventListener('click', () => {

    var codigoACopiar1 = document.getElementById('TEXTO');
    codigoACopiar1.select();
    codigoACopiar1.setSelectionRange(0, 99999);

    document.execCommand('copy');

})

document.getElementById("TIPOTKT").addEventListener('change', () => {

    document.getElementById("TKTSALIDA").value = `Ticket generado en Moica: ${document.getElementById("TKT").value} motivo ${document.getElementById("TIPOTKT").value}.`;

})

document.getElementById("COPIAR2").addEventListener('click', () => {

    var codigoACopiar1 = document.getElementById('TKTSALIDA');
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
    MostrarOBSERVACIONES();
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

const MostrarCAJATOMA = () => {
    document.getElementById("CAJATOMA").classList.add("d-block");
    document.getElementById("CAJATOMA").classList.remove("d-none");
}

const OcultarCAJATOMA = () => {
    document.getElementById("CAJATOMA").classList.remove("d-block");
    document.getElementById("CAJATOMA").classList.add("d-none");
}

const MostrarCAJASUGERIDA = () => {
    document.getElementById("CAJASUGERIDA").classList.add("d-block");
    document.getElementById("CAJASUGERIDA").classList.remove("d-none");
}

const OcultarCAJASUGERIDA = () => {
    document.getElementById("CAJASUGERIDA").classList.remove("d-block");
    document.getElementById("CAJASUGERIDA").classList.add("d-none");
}

const MostrarCAJAPARAILUM = () => {
    document.getElementById("CAJAPARAILUM").classList.add("d-block");
    document.getElementById("CAJAPARAILUM").classList.remove("d-none");
}

const OcultarCAJAPARAILUM = () => {
    document.getElementById("CAJAPARAILUM").classList.remove("d-block");
    document.getElementById("CAJAPARAILUM").classList.add("d-none");
}

const MostrarDATOSPARASC = () => {
    document.getElementById("DATOSPARASC").classList.add("d-block");
    document.getElementById("DATOSPARASC").classList.remove("d-none");
}

const OcultarDATOSPARASC = () => {
    document.getElementById("DATOSPARASC").classList.remove("d-block");
    document.getElementById("DATOSPARASC").classList.add("d-none");
}

const ModoFTTH = () => {
    document.getElementById("InForHFC").classList.remove("d-block");
    document.getElementById("InForHFC").classList.add("d-none");
    document.getElementById("InForFTTH").classList.remove("d-none");
    document.getElementById("InForFTTH").classList.add("d-block");
    document.getElementById("TECNOLOGIA").value = "";
    document.getElementById("ARMADO").value = "";
    document.getElementById("OBS").value = "";
    document.getElementById("CONTEMPLADO").value = "";
    document.getElementById("TECNOLOGIA").disabled = true;
    document.getElementById("ARMADO").disabled = true;
    document.getElementById("MTSFTTH").disabled = false;
    document.getElementById("CONTEMPLADO").disabled = false;
    MostrarOBSERVACIONES();
    OcultarCAJASUGERIDA();
    OcultarCAJATOMA();
    OcultarCAJAPARAILUM();
    OcultarDATOSPARASC();

}

const MostrarFECHAPROGRAM = () => {
    document.getElementById("FECHA").classList.add("d-block");
    document.getElementById("FECHA").classList.remove("d-none");
}

const OcultarFECHAPROGRAM = () => {
    document.getElementById("FECHA").classList.remove("d-block");
    document.getElementById("FECHA").classList.add("d-none");
}

const BorrarPasosMoica = () => {
    document.getElementById("moicaSectorInicial").value = "";
    document.getElementById("moicaAsunto").value = "";
    document.getElementById("moicaSector").value = "";
    document.getElementById("moicaSubsector").value = "";
    document.getElementById("moicaCola").value = "";
    document.getElementById("moicaProblema").value = "";
    document.getElementById("moicaTipoZona").value = "";
}

const PasosMoicaHFC = () => {
    BorrarPasosMoica();
    document.getElementById("moicaSectorInicial").value = "Armado de edificios";
    document.getElementById("moicaAsunto").value = "Pedido de Reforma de Red para Edificios";
    document.getElementById("moicaSector").value = "Diseño red";
    document.getElementById("moicaSubsector").value = "Edificios HFC";
    document.getElementById("moicaCola").value = "Diseño Edificios normalizado/armado reforma de red";
    document.getElementById("moicaTipoZona").value = "Por Direccion";
}

const PasosMoicaFTTH = () => {
    BorrarPasosMoica();
    document.getElementById("moicaSectorInicial").value = "Armado de edificios";
    document.getElementById("moicaSector").value = "No Aplica";
    document.getElementById("moicaSubsector").value = "No Aplica";
    document.getElementById("moicaCola").value = "No Aplica";
    document.getElementById("moicaTipoZona").value = "Por Nodo";
}

const Limpiar = () => {
    document.getElementById("ID").value = "";
    document.getElementById("PISOS").value = "";
    document.getElementById("UF").value = "";
    document.getElementById("NODO").value = "";
    document.getElementById("DIRECCION").value = "";
    document.getElementById("ENTRECALLE1").value = "";
    document.getElementById("ENTRECALLE2").value = "";
    document.getElementById("POSTE").value = "";
    document.getElementById("METROS").value = "";
    document.getElementById("TAPHOT").value = "";
    document.getElementById("AMPLI").value = "";
    document.getElementById("CH116").value = "";
    document.getElementById("CH3").value = "";
    document.getElementById("RETORNO").value = "";
    document.getElementById("OBS").value = "";
    document.getElementById("ARMADO").value = "";
    document.getElementById("PISOSFTTH").value = "";
    document.getElementById("UFFTTH").value = "";
    document.getElementById("MTSFTTH").value = "";
    document.getElementById("CONTEMPLADO").value = "";
    document.getElementById("CAJAFTTH").value = "";
    document.getElementById("TIPOFIBRA").value = "";
    document.getElementById("NTIPOFIBRA").value = "";
    document.getElementById("CAJAENRELEVO").value = "";
    document.getElementById("CAJASEGUNRELEVO").value = "";
}

function validarCampos() {

    if (document.getElementById("TIPO").value <= 11) {

        if ((document.getElementById("ID").value == "") || (document.getElementById("NODO").value == "") || (document.getElementById("DIRECCION").value == "") || (document.getElementById("ENTRECALLE1").value == "") || (document.getElementById("ENTRECALLE2").value == "") || (document.getElementById("METROS").value == "") || (document.getElementById("PISOS").value == "") || (document.getElementById("UF").value == "") || (document.getElementById("EDIFPROGRA").value == "")) {
            return true
        }
        else {

            if ((document.getElementById("EDIFPROGRA").value == "Si") && (document.getElementById("FECHA").value == "")) {
                return true
            }
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
    } else {

        if ((document.getElementById("ID").value == "") || (document.getElementById("NODO").value == "") || (document.getElementById("DIRECCION").value == "") || (document.getElementById("PISOSFTTH").value == "") || (document.getElementById("UFFTTH").value == "") || (document.getElementById("EDIFPROGRA").value == "")) {
            return true
        }
        else {
            if ((document.getElementById("TIPO").value == 12) || (document.getElementById("TIPO").value == 17)) {
                if ((document.getElementById("MTSFTTH").value == "") || (document.getElementById("CONTEMPLADO").value == "") || (document.getElementById("NTIPOFIBRA").value == "") || (document.getElementById("TIPOFIBRA").value == "") || (document.getElementById("LARGOFIBRA").value == "")) {
                    return true
                } else {
                    if ((document.getElementById("EDIFPROGRA").value == "Si") && (document.getElementById("FECHA").value == "")) {
                        return true
                    }
                    if (document.getElementById("CONTEMPLADO").value == "Si") {
                        if (document.getElementById("CAJAFTTH").value == "") {
                            return true
                        }
                    } else {
                        if (document.getElementById("CAJAENRELEVO").value == "") {
                            return true
                        } else {
                            if (document.getElementById("CAJAENRELEVO").value == "Si") {
                                if (document.getElementById("CAJASEGUNRELEVO").value == "") {
                                    return true
                                }
                            }
                        }
                    }
                }
            }

            if (((document.getElementById("TIPO").value == 13) || (document.getElementById("TIPO").value == 18)) && (document.getElementById("CAJAILUMINAR").value == "")) {
                return true
            }

            if ((document.getElementById("TIPO").value == 14) && (document.getElementById("OBS").value == "Para el edificio en cuestión se solicita contemplar la opción de extender la red sobre ")) {
                alert("Debes agregar una observación describiendo la problemática.")
                return true
            }

            if ((document.getElementById("TIPO").value == 15) && (document.getElementById("OBS").value == "Para el edificio en cuestión se solicita contemplar la ejecucion de una Obra Civil para ")) {
                alert("Debes agregar una observación describiendo la problemática.")
                return true
            }

            if (document.getElementById("TIPO").value == 16) {
                if ((document.getElementById("MTSFTTH").value == "") || (document.getElementById("NTIPOFIBRA").value == "") || (document.getElementById("TIPOFIBRA").value == "") || (document.getElementById("LARGOFIBRA").value == "")) {
                    return true
                } if (document.getElementById("CAJAENRELEVO").value == "") {
                    return true
                } else {
                    if (document.getElementById("CAJAENRELEVO").value == "Si") {
                        if (document.getElementById("CAJASEGUNRELEVO").value == "") {
                            return true
                        }
                    }
                }
            }
        }
    }
}


