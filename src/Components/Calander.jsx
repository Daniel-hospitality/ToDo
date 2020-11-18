import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";



const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="MainApp">
      <Calendar showWeekNumbers  onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </div>
  );

};

// console.log(JSON.stringify(Holiday)); 
export default MyCalendar;



// import Holiday from './Holiday.json'

// function MyCalendar() {
//   const [value, onChange] = useState(new Date());
 
//   return (
//     <div>
     
//       <Calendar onChange={onChange} value={value} />
//       {console.log(Date)}
      
//     </div>
      
//   );
// };