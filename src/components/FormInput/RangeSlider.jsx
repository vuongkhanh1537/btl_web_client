import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (index, event) =>  {
    const newValue = [...value];
    newValue[index] = Number(event.target.value);
    setValue(newValue);
  };

  console.log(value);
  return (
    
    <Box sx={{ width: 200 }}  >
        <label className='form-label'>Price </label> 
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color='info'
        min={100}
        max={1000}
        step={30}
        
      />
    <div className='align-items-center d-flex justify-content-between'>
    <span className='col-sm-5'><input className='form-control' type="number"  value={value[0]} onChange={(e) =>handleInputChange(0,e)} /></span> 
    <span className=''>to</span>
    <span className='col-sm-5'><input className='form-control' type="number"  value={value[1]} onChange={(e) =>handleInputChange(1,e)} /></span> 
    </div>
      
    </Box>
    
  );
}
