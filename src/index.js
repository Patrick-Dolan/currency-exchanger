import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from "./js/ExchangeRateService";

function clearFields() {
  $("#amountToExchange").val("");
  $("#currencyToExchangeTo").val("");
  $("#conversionResults").text("");
  $("#errors").text("");
}

function displayConversionResults(amountToExchange, convertedAmount, currencyToExchangeTo) {
  $("#conversionResults").text(`$${amountToExchange} in USD is equal to $${convertedAmount} in ${currencyToExchangeTo}`);
}

function displayErrors(error) {
  $("#errors").text(`${error}`);
}

$(document).ready(() => {
  $("#convertButton").click((event) => {
    event.preventDefault();
    let amountToExchange = parseFloat(parseFloat($("#amountToExchange").val()).toFixed(2));
    let currencyToExchangeTo = $("#currencyToExchangeTo").val();
    let convertedAmount = 0;
    clearFields();
    ExchangeRateService.getRates()
      .then((exchangeRateResponse) => {
        if (exchangeRateResponse instanceof Error) {
          throw Error(`ExchangeRate API error: ${exchangeRateResponse.message}`);
        }
        let currencyExchangeRate = ExchangeRateService.getRateFromResponse(exchangeRateResponse, currencyToExchangeTo);
        if (typeof currencyExchangeRate === "string") {
          displayErrors(currencyExchangeRate);
        } else {
          convertedAmount = ExchangeRateService.convertCurrency(amountToExchange, currencyExchangeRate);
          displayConversionResults(amountToExchange, convertedAmount, currencyToExchangeTo);
        }
      })
      .catch((error) => {
        displayErrors(error.message);
      });
  });
});
