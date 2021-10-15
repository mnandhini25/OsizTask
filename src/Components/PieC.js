import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const PieC = ()=>{
    return(
        <div>
            <Chart
  width={'1000px'}
  height={'900px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]}
  options={{
    title: 'My Daily Activities',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </div>
    )
}
export default PieC

