import React from 'react'
import './style.css'
import TemporaryDrawer from './drawer'
import Button from '../Button'
import { Dashboard } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='navbar'>
       <h1 className='logo'>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
       <div className='links'>
       <Link  to='/'>     <p className='link'>Home</p>  </Link>
       <Link to='/compare'>     <p className='link'>Compare</p>  </Link>
       <Link  to='/watchlist'>     <p className='link'>WatchList</p>  </Link>
       <Link  to='/dashboard'>    <Button text={"Dashboard"} onClick={()=>{console.log("btn-clicked")}} outlined={false}/> </Link>
       
       </div>
       <div className='Mobile-Drawer'><TemporaryDrawer/></div>

    </div>
  )
}

export default Header