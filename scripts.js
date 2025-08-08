const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

//função para converter valores
function convertValues() {
  //       variável            html     seletor      mapear o input    mapea o valor digitado no input
  const inputCurrencyValue = document.querySelector(".input-currency").value; // valor digitado no input
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real e outros
  const currencyValueConverted = document.querySelector(".currency-value"); // Valor em Euro e Outras moedas

  const dolarToday = 5.2; // dólar do dia
  const euroToday = 6.2; // euro do dia
  const libraToday = 8.9; // libra do dia
  const btcToday = 17.6; // btcoin do dia

  // Converter para...
  if (currencySelect.value == "dolar") {
    // Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value == "btc") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / btcToday);
  }

  // valor original em real / troca o texto  / novo texto
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    // Modelo para formatar numeros
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

//função para mudar moeda e imagem da bandeira do país
function changeCurrency() {
  // mudar o nome do pais da moeda
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  // converter de

  // converter para
  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "£ Libra";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencySelect.value == "btc") {
    currencyName.innerHTML = "₿ Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "R$ Real";
    currencyImage.src = "./assets/real.png";
  }
  convertValues();
}
// variável       ouvinte de eventos        função
convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);
