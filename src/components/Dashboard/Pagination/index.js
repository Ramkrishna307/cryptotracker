import  React, { useState } from 'react';

import Pagination from '@mui/material/Pagination';
import './style.css'

export default function PaginationComp({page,handlePageChange}) {
//   const [page, setPage] = useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };
//   const style={
//     backgroundColor: "var(--your-color-here)",
//     color: "var(--red)",
//     width: "50vw",
//     fontSize: "1.2rem",
//     fontFamily: "Inter",
//     fontWeight: 600,
//     textTransform: "capitalize",

//   }
const style = {
    // Base styles for dark theme
    color: "var(--white)",
    // backgroundColor: "var(--dark-gray)",
  
    // "& .MuiPaginationItem-root": {
    //   border: "1px solid var(--border-gray)",
    //   borderRadius: "4px",
    //   margin: "0 4px",
    //   "&:hover": {
    //     backgroundColor: "var(--hover-gray)",
    //   },
    // },
  
    "& .Mui-selected": {
      backgroundColor: "var(--blue) !improtant",
      color: "var(--white) !improtant" ,
      "&:hover": {
        backgroundColor: "var(--dark-blue)",
      },
    },
  
    "& .MuiPaginationItem-ellipsis": {
      broder: "0px soild var(--grey) !improtant"
    },
  
    "& .MuiPaginationItem-text": {
    //   fontSize: "0.875rem",
    //   fontWeight: "500",
    color:"var(--white)",
    broder:"1px solid var(--grey)",
    },
  };
    

 
  return (
    <div className='flex-pageint'>
      
      {/* <Pagination className='page-int' count={10} page={page} onChange={()=>{handlePageChange}} sx={style} /> */}
      <Pagination className='page-int' count={10} page={page} onChange={(event, value) => handlePageChange(event, value)} sx={style} />

      </div>
  );
}