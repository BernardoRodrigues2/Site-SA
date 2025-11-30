//Código para fazer o calculo de tensão:
    function calculoOhm() {
        let R = Number(document.getElementById("resistencia").value);
        let I = Number(document.getElementById("corrente").value);
        if (isNaN(R) || isNaN(I)) {
            document.getElementById("resultado").innerText = "Valor inválido, Digite novamente!";
        } else {
            let V = R * I;
            document.getElementById("resultado").innerText = "Valor da Tensão: " + V.toFixed(2) + " V";
        }
    }

//Código para fazer o calculo de potencia com tensão corrente e resistencia:
function calculoPotencia() {
    let V = Number(document.getElementById("tensao").value);
    let I = Number(document.getElementById("correntePot").value);
    let R = Number(document.getElementById("resistenciaPot").value);

    if (isNaN(V) || isNaN(I)) {
        document.getElementById("resultadoPot").innerText = "Valor inválido, Digite novamente!";
        return;
    }

    let P = V * I; 
    if (!isNaN(R) && R > 0) {
        let P2 = (V * V) / R; // P = V² / R
        document.getElementById("resultadoPot").innerText =
            "P = V × I = " + P.toFixed(2) + " W\n" +
            "P = V² ÷ R = " + P2.toFixed(2) + " W";
        return;
    }

    document.getElementById("resultadoPot").innerText =
        "Valor da potência: " + P.toFixed(2) + " W";
}

//Código para ler o sensor e simular se ele está ligado ou desligado:
     function lerSensor() {
        let valor = parseInt(document.getElementById("valorSensor").value);
        if (isNaN(valor) || valor < 0 || valor > 1023) {
            document.getElementById("resultadoSensor").innerText = "Valor inválido, Digite novamente!";
        } else {
            if (valor < 500) {
                document.getElementById("resultadoSensor").innerText = "Pouca intensidade → LED ligado!";
            } else {
                document.getElementById("resultadoSensor").innerText = "Alta intensidade → LED desligado!";
            }
        }
    }