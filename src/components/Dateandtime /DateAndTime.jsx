import React from 'react'
import "../../components/Dateandtime/date.css"
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import{ DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import { margin } from '@mui/system';

function DateAndTime() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
 
    const handleChange = (newValue) => {
      setValue(newValue);
    };
   
    return (

      <div className ="container date_picker">
      <h3 className ="date_h">Pick a Date and Time for your appointment</h3>
      <hr style={{width:"20rem", "marginLeft":"10rem"}}/>
      <div  className = "" style={{margin: "15% 40%  -4%",width:"30rem"}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={10}>
            <DesktopDatePicker
              label="Date "
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            {/* <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            /> */}
            <TimePicker
     
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      </div>
    );
  }

export default DateAndTime
