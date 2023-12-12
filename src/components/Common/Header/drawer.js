import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import { IconButton } from '@mui/material';

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
          <a  href='/'>     <p className='link'>Home</p>  </a>
          <a  href='/'>     <p className='link'>Compare</p>  </a>
          <a  href='/'>     <p className='link'>WatchList</p>  </a>
          <a  href='/'>     <p className='link'>DashBoard</p>  </a>
          </div>
          </Drawer>
       
     
    </div>
  );
}


