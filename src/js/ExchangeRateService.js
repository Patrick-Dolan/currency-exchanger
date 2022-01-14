export default class ExchangeRateService {
  static getRates() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        return Error(error);
      });
  }
  static convertCurrency(amountToExchange, currencyExchangeRate) {
    return convertedRate = "$" + (amountToExchange / currencyExchangeRate).toFixed(2);
  }
}