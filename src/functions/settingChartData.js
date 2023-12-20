import { convertDate } from "./convertDate"

export const settingChartDataByDays=(setchartData,prices)=>{
    setchartData(
        {
           labels: prices.map((price)=>{ return convertDate(price[0])}),
           datasets: [
             {
              
               data: prices.map((price)=>{ return price[1]}),
               borderColor: '#4169e1',
               backgroundColor: 'transparent',
               borderWidth: 2,
               fill:true,
               tension:0.25,
               backgroundColor:"rgba(65, 105, 225,0.1)",
               pointRadius:0,

           
             },
           ]
         
       })
}