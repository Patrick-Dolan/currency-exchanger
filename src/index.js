import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from "./js/ExchangeRateService";

$(document).ready(() => {
  $("#convertButton").submit((event) => {
    event.preventDefault();
    let amountToExchange = $("#amountToExchange").val();
    let currencyToExchangeTo = $("#currencyToExchangeTo").val();
    
  });
});