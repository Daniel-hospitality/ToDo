import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

import Holiday from './Holiday.json'

function MyCalendar() {
  const [value, onChange] = useState(new Date());
 
  return (
    <div>
      {/* <Holiday />  */}
     
      <Calendar
        onChange={onChange}
        value={value}
        

      />
      
    </div>
      
  );
}

console.log(JSON.stringify(Holiday)); 
export default MyCalendar;