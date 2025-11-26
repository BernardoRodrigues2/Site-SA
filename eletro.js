    function calculoOhm() {
        let R = Number(document.getElementById("resistencia").value);
        let I = Number(document.getElementById("corrente").value);
        if (isNaN(R) || isNaN(I)) {
            document.getElementById("resultado").innerText = "Valor inválido, Digite novamente!";
        } else {
            let V = R * I;
            document.getElementById("resultado").innerText = "Valor calculado da Tensão: " + V.toFixed(2) + " V";
        }
    }

    function calculoPotencia() {
        let V = document.getElementById("tensao").value;
        let I = document.getElementById("corrente").value;
    
        if (V.trim() === "" || I.trim() === "") {
            document.getElementById("resultadoPot").innerText = "Valor inválido, Digite novamente!";
            return;
        }
        V = Number(V);
        I = Number(I);
        if (isNaN(V) || isNaN(I)) {
            document.getElementById("resultadoPot").innerText = "Valor inválido, Digite novamente!";
            return;
        }
        let P = V * I;
        document.getElementById("resultadoPot").innerText =
            "Valor do calculo da potência: " + P.toFixed(2) + " W";
    }

     function lerSensor() {
        let valor = parseInt(document.getElementById("valorSensor").value);
        if (isNaN(valor) || valor < 0 || valor > 1023) {
            document.getElementById("resultadoSensor").innerText = "Valor inválido, Digite novamente!";
        } else {
            if (valor < 500) {
                document.getElementById("resultadoSensor").innerText = "Pouca intensidade detectada → LED ligado!";
            } else {
                document.getElementById("resultadoSensor").innerText = "Alta intensidade detectada → LED desligado!";
            }
        }
    }