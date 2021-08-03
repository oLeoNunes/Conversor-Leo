let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")
let selectin = document.getElementById("moeda-in")

async function converter() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BRL-USD,EUR-USD,BRL-EUR,USD-EUR").then(function (resposta) {
        return resposta.json()
    })

    console.log(moedas)

    let dolarr = moedas.USDBRL.high
    let euror = moedas.EURBRL.high
    let real = 1

    let reald = moedas.BRLUSD.high
    let eurod = moedas.EURUSD.high
    let dolar =1

    let dolare = moedas.USDEUR.high
    let reale = moedas.BRLEUR.high
    let euro = 1


    let valorconverter = Number(document.getElementById("input").value)
    let inputmoedas = document.getElementById("input-Moedas")
    let textoreal = document.getElementById("texto-real")

    document.addEventListener('keypress', function (e) {
        if (e.which == 13) {
            converter();
        }
    }, false);

    if (selectin.value === "R$ Real Brasileiro") {
        if (select.value === "$ Dolar Americano") {
            let valoremdolarr = valorconverter / dolarr
            inputmoedas.innerHTML = valoremdolarr.toLocaleString("en-US", { style: "currency", currency: "USD" })
        }

        if (select.value === "€ Euro") {
            let valoremEuror = valorconverter / euror
            inputmoedas.innerHTML = valoremEuror.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
        }

        if (select.value === "R$ Real Brasileiro") {
            let valoremreal = valorconverter / real
            inputmoedas.innerHTML = valoremreal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        }

        textoreal.innerHTML = valorconverter.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    }


    if (selectin.value === "$ Dolar Americano") {
        if (select.value === "R$ Real Brasileiro") {
            let valoremreald = valorconverter / reald
            inputmoedas.innerHTML = valoremreald.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        }

        if (select.value === "€ Euro") {
            let valoremEurod = valorconverter / eurod
            inputmoedas.innerHTML = valoremEurod.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
        }

        if (select.value === "$ Dolar Americano") {
            let valoremdolar = valorconverter / dolar
            inputmoedas.innerHTML = valoremdolar.toLocaleString("en-US", { style: "currency", currency: "USD" })
        }


        textoreal.innerHTML = valorconverter.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (selectin.value === "€ Euro") {
        if (select.value === "R$ Real Brasileiro") {
            let valoremreale = valorconverter / reale
            inputmoedas.innerHTML = valoremreale.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        }

        if (select.value === "$ Dolar Americano") {
            let valoremdolare = valorconverter / dolare
            inputmoedas.innerHTML = valoremdolare.toLocaleString("en-US", { style: "currency", currency: "USD" })
        }

        if (select.value === "€ Euro") {
            let valoremEuro = valorconverter / euro
            inputmoedas.innerHTML = valoremEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
        }

        textoreal.innerHTML = valorconverter.toLocaleString("en-US", { style: "currency", currency: "USD" })

    }
}

//trocar o nome e bandeira
function trocademoeda() {
    let textomoedas = document.getElementById("texto-moedas")
    let bandeiras = document.getElementById("bandeira-Moedas")

    if (select.value === "$ Dolar Americano") {
        textomoedas.innerHTML = "Dólar Americano"
        bandeiras.src = "./img/eua.png"
    }

    if (select.value === "€ Euro") {
        textomoedas.innerHTML = "Euro"
        bandeiras.src = "./img/euro.png"
    }

    if (select.value === "R$ Real Brasileiro") {
        textomoedas.innerHTML = "Real"
        bandeiras.src = "./img/br.png"
    }
    converter()
}

let textomoedasin = document.getElementById("texto-moedas-in")
let bandeirasin = document.getElementById("bandeira-in")

function trocademoedain() {
    if (selectin.value === "$ Dolar Americano") {
        textomoedasin.innerHTML = "Dólar Americano"
        bandeirasin.src = "./img/eua.png"
    }

    if (selectin.value === "€ Euro") {
        textomoedasin.innerHTML = "Euro"
        bandeirasin.src = "./img/euro.png"
    }

    if (selectin.value === "R$ Real Brasileiro") {
        textomoedasin.innerHTML = "Real"
        bandeirasin.src = "./img/br.png"
    }
    converter()
}





botao.addEventListener("click", converter)
select.addEventListener("change", trocademoeda)
selectin.addEventListener("change", trocademoedain)