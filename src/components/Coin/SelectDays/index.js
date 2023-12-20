import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import './style.css';

export default function SelectDays({days,handleDaysChnage}) {
  // const [days, setDays] = useState(30);

  // const handleChange = (event) => {
  //   setDays(event.target.value);
  // };

  return (
    <div className='select-days'>
      <p>Price Change in the last</p>
      <Select
       sx={{
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        },
      }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="days"
        onChange={handleDaysChnage}
      >
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={14}>14 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
        <MenuItem value={1}>1 year</MenuItem>
      </Select>
    </div>
  );
}
