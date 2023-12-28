import axios from "axios";


export const getCoinPricesForCompare = (id, days, priceType) => {
  const data = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      if (priceType == "prices") return response.data.prices;
      else if (priceType == "market_caps") return response.data.market_caps;
      else if (priceType == "total_volumes") return response.data.total_volumes;
    })
    .catch((error) => {
      console.log("Error>>>", error);
    });
  return data;
};