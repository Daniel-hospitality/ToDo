import React from 'react';
import './App.css';

import MyCalendar from './Components/Calander';
import ToDo from './Components/ToDo'
import Klick from './Components/Klick'
import Testapi from './Components/Testapi'
// import NLHoliday from './Components/Holiday'

function App() {

return (
  <div className="TestTodo">
    <h1>Test ToDO Daniel</h1>

    <p>Calendar begin</p>
    <MyCalendar />
    {/* <NLHoliday /> */}
    <p>+ of - en Hide</p>
    <Klick />
    <p>ToDo Start</p>
    <ToDo />
    <p>gif search test</p>
    <Testapi />
  </div>
);

}




export default App;
