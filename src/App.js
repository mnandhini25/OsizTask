import logo from './logo.svg';
import './App.css';
import Bar from './Components/Bar';
import LineC from './Components/Line';
import PieC from './Components/PieC';

function App() {
  return (
    <div className="App">
      <div><h1>Bar Chart - Students Attendance</h1></div>
     <div> <Bar/></div><br/><br/>
     <div><h1>Pie Chart</h1></div>
     <div><PieC/></div><br/><br/>
     <div><h1>Line Chart - Stock Monitoring</h1></div>
     <div className="linechart"><LineC/></div>
    </div>
  );
}


export default App;
