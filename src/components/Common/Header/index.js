import React from 'react'
import './style.css'
import TemporaryDrawer from './drawer'
import Button from '../Button'
import { Dashboard } from '@mui/icons-material'
const index = () => {
  return (
    <div className='navbar'>
       <h1 className='logo'>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
       <div className='links'>
       <a  href='/'>     <p className='link'>Home</p>  </a>
       <a  href='/'>     <p className='link'>Compare</p>  </a>
       <a  href='/'>     <p className='link'>WatchList</p>  </a>
       <a  href='#'>    <Button text={"Dashboard"} onClick={()=>{console.log("btn-clicked")}} outlined={false}/> </a>
       
       </div>
       <div className='Mobile-Drawer'><TemporaryDrawer/></div>

    </div>
  )
}

export default index