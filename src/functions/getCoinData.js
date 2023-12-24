import axios from "axios";
export const getCoinData= async(id)=>{

   const myData= axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
  .then(
       (response)=>{
               console.log("Response market price rammm>>",response.data);
            return response.data;
            // console.log("Proices market cap",response.data);
            
        }
        ).catch((error)=>{
           
             console.log(error)
            })
        return myData;
        
}


// import axios from "axios";

//  export const getCoinData= async(id)=>{

// const myData= await axios.get(`http://api.coingecko.com/api/v3/coins/${id}`,{headers: {'Access-Control-Allow-Origin': '*'}});
//  console.log(myData.data);
//   return myData.data;
//  }
// React component


// import axios from 'axios';

// export const  getCoinData = async (id) => {
//   try {
//     const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/${id}`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//   }
// };
