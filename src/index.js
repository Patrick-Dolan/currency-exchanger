import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from "./js/ExchangeRateService";

function clearFields() {
  $("#amountToExchange").val("");
  $("#currencyToExchangeTo").val("");
  $("#conversionResults").val("");
  $("#errors").val("");
}

function displayConversionResults(amountToExchange, convertedAmount) {
  $("#conversionResults").text(`${amountToExchange} is equal to ${convertedAmount}`);
}

function displayErrors(error) {
  $("#errors").text(`${error}`);
}

$(document).ready(() => {
  $("#convertButton").click((event) => {
    event.preventDefault();
    let amountToExchange = $("#amountToExchange").val();
    let currencyToExchangeTo = $("#currencyToExchangeTo").val();
    clearFields();
    ExchangeRateService.getRates()
      .then((exchangeRateResponse) => {
        if (exchangeRateResponse instanceof Error) {
          throw Error(`ExchangeRate API error: ${exchangeRateResponse.message}`);
        }
        let convertedAmount = amountToExchange + currencyToExchangeTo;
        displayConversionResults(amountToExchange, convertedAmount);
      })
      .catch((error) => {
        displayErrors(error.message);
      });
  });
});