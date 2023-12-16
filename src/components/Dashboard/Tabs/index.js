import React, { useState } from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from '../Grid';
import './style.css'
import List from '../List';

export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');
  console.log("okay i am arrive",coins);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //if we need to change the custom Theme of the tabs  from blue to any other color
  const theme=createTheme(
    {
        palette:{
            primary:{
                main: "#4169e1"
          
            }
        }
    }
  )


  //to chnage the color of the grid when it is not seleted
  const style={
    color:"var(--white)",
    width:"50vw",
    fontSize:"1.2rem",
    FontFamily:"Inter",
    fontWeight:600,
    textTransform:"capitalize"

  }

  return (
<ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange}   variant="fullWidth">
            <Tab label="grid" value="grid" sx={style}/>
            <Tab label="list" value="list" sx={style}/>
          
          </TabList>
        </div>
        <TabPanel value="grid">
       <div className='grid-flex'>
        {/* <p>Grid</p> */}
         { coins.map((coin,i)=>{
            return(
              <Grid coin={coin} key={i}/>
            )
         })
        }
       </div>
       

    </TabPanel>

    <TabPanel value="list"> <table className='list-table' >
        
        { coins.map((coin,i)=>{
           return(
             <List coin={coin} key={i}/>
           )
        })
       }
      </table>
      
      </TabPanel>
        
    </TabContext>
</ThemeProvider>
  );
}
