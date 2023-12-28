import axios from "axios";

export const getCoinPrices= (id,days,priceTypes)=>{
  console.log("This is from getCoinPrices",id, days, priceTypes)
     
    const prices= axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response)=>{
                     return response.data[priceTypes];
                                
                 })
    .catch((error)=>{
      console.log(error);
      
    })

    return prices;

}



    