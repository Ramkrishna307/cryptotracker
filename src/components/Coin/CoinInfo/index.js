import React, { useState } from 'react'
import './style.css'

const  CoinInfo = ({heading, desc}) => {

    const[flag,setFlag]=useState(false)
    const shortDesc=desc.slice(0,300)+"<span style='color:var(--grey'>Read More....</span>";
    const longDesc=desc+"<p style='color:var(--grey'>Read less....</p>"
  
    return (
    <div className='grey-wrapper'> 
    <h2 className='coininfo-heading'>{heading}</h2>


    {

        desc.length>300 ?  <p className='coininfo-description' onClick={()=>setFlag(!flag)} dangerouslySetInnerHTML={{__html:!flag ? shortDesc :longDesc}}/> :<p className='coininfo-description'>{desc}</p> 
    }
  
   
    </div>
  )
}

export default  CoinInfo