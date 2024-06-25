 
import React, { useState } from 'react';
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const DataPackerUtility = () => {
  const [selectDate,setSelectedDateTime]=useState("10/7/2024")
    const handleDateChange = (date) => {
      setSelectedDateTime(date);
    };

  
    return (
      <DatePicker onChange={handleDateChange} value={selectDate}/>
    );
}

export default DataPackerUtility