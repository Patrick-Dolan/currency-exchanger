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
    return (amountToExchange / currencyExchangeRate).toFixed(2);
  }
  static getRateFromResponse(response, currencyToExchangeTo) {
    let currencies = Object.keys(response.conversion_rates);
    if (!currencies.includes(currencyToExchangeTo)) return "Error currency doesnt exist.";
    for (let i = 0; i < currencies.length; i++) {
      if (currencies[i] === currencyToExchangeTo) {
        return response.conversion_rates[currencies[i]];
      }
    }
  }
}