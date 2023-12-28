import axios from "axios";
export const getCoinData= async(id)=>{
    console.log("Id from getCoinData",id);
   const myData= axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
  .then(
       (response)=>{
            return response.data;
        }
        ).catch((error)=>{
           
             console.log(error)
            })
        return myData;
        
}
