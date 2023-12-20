import axios from "axios";

export const getCoinPrices= (id,days,priceTypes)=>{
  console.log(id, days, priceTypes)
    const prices= axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response)=>{
                     console.log("chart prices",response)
                    //  console.log("chart prices",response)
                     return response.data[priceTypes];
                                
                 })
    .catch((error)=>{
      console.log(error);
      
    })

    return prices;

}



    