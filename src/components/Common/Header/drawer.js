import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
   const[open,setOpen]=useState(false)
  

  return (
    <div>
     
          <IconButton onClick={()=>{setOpen(true)}}><ReorderRoundedIcon className='link'/></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>{setOpen(false)}}
          >
          <div className='drawer-div'>
          <Link  to='/'>     <p className='link'>Home</p>  </Link>
          <Link  to='/compare'>     <p className='link'>Compare</p>  </Link>
          <Link  to='/watchlist'>     <p className='link'>WatchList</p>  </Link>
          <Link  to='/dashboard'>     <p className='link'>DashBoard</p>  </Link>
          </div>
          </Drawer>
       
     
    </div>
  );
}


