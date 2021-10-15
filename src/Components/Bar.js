import React from "react";
import Paper from '@material-ui/core/Paper';
import {
ArgumentAxis,
ValueAxis,
Chart,
BarSeries,
} from '@devexpress/dx-react-chart-material-ui';


const Bar = () => {

// Sample data
const data = [
{ argument: 'Monday', value: 45 },
{ argument: 'Tuesday', value: 51 },
{ argument: 'Wednesday', value: 57 },
{ argument: 'Thursday', value: 35 },
{ argument: 'Friday', value: 60 },
];
return (
	<Paper elevation={20} >
	<Chart
	data={data}
	>
	<ArgumentAxis />
	<ValueAxis />

	<BarSeries valueField="value" argumentField="argument" />
	</Chart>
</Paper>
);
}

export default Bar;
