const convertButton = document.querySelector(".button-convert")
const selectCurrency = document.querySelector(".option-currency")


function convertValues(){
const inputValues = document.querySelector(".input-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const convertedValue = document.querySelector(".currency-value")


const dolarToday = 5.5
const euroToday = 5.9
const libraToday = 7.04


if(selectCurrency.value == "libra"){
    convertedValue.innerHTML = new Intl.NumberFormat("en-uk", {
        style: "currency",
        currency: "gbp"
    }).format(inputValues / libraToday )

}

if(selectCurrency.value == "dolar"){
    convertedValue.innerHTML = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "usd"
    }).format(inputValues /dolarToday )
}

if(selectCurrency.value == "euro")
    convertedValue.innerHTML = new Intl.NumberFormat("de-de", {
        style: "currency",
        currency: "eur"

}).format(inputValues / euroToday )


currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "brl"
}).format(inputValues)

}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
   

    if(selectCurrency.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "../assets/euro.png"
    }

    if(selectCurrency.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "../assets/dolar.png"
    }

    if(selectCurrency.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "../assets/libra.png"
    }

    convertValues()

}

  

convertButton.addEventListener("click", convertValues )
selectCurrency.addEventListener("change",changeCurrency,  )


