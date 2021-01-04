import React, { Component } from 'react';

/////////https://www.youtube.com/watch?v=9C85o8jIgUU///////

import Holiday from './HolidayJ.json';

class HolidayLijst extends Component {
  render() {
    return (
      <div>
        <h1>Test lijst</h1>
        {Holiday.map((HolidayDetail) => {
          return <div>
           <h1>{HolidayDetail.date}</h1>
           <p>{HolidayDetail.name}</p>
           </div>
        })}
      </div>
    );
  };
};

// console.log(JSON.stringify(Holiday));

export default HolidayLijst;
