export const convertDate=(date)=>{
  var mydate=new Date(date);
  return mydate.getDate()+"/"+(mydate.getMonth()+1)
}