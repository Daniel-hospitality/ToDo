import React, { useState } from 'react';


import Holiday from './Holiday.json'

class NlHoliday extends Comment {
    render () {
        return (
         <div ClassName='NlHoliday'>
          </div>
          {Holiday.map((Holidaydate, index)=>{
              return {Holidaydate.date}
          }
          </div>

          )}
        );


 

    }
}

console.log(JSON.stringify(Holiday)); 

export default Holiday;

