import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
  } from 'chart.js';
  
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
  );

const ReminderChart = () => {
	const url = process.env.REACT_APP_API_URL;
	const [reminders, setReminders] = useState([]);


	const getReminders = async () => {
		try {
	
			const response = await axios.get(`${url}/admin/reminders`);
			setReminders(response.data.allReminders);

		} catch (error) {
			console.log(error);

		}
	};

	useEffect(() => {
		getReminders();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log('reminders', reminders);

	const data = {
		labels: reminders?.map((x) => x.name),
		datasets: [
			{
				label: `REMINDER`,
				data: reminders?.map((x) => x.order),
				backgroundColor: 'rgba(255, 206, 86, 0.2)',
				borderColor: 'rgba(255, 206, 86, 1)',
				borderWidth: 1,
			},
		],
	};

	console.log('data', data);

	const options = {
		maintainAspectRatio: false,
		scales: {},
		legend: {
			labels: {
				fontSize: 25,
			},
		},
	};

	/* console.log(categories[0].name); */
	return (
		<ChartWrapper>
			<Line data={data} options={options} height={100}/>
		</ChartWrapper>
	);
};

export default ReminderChart;

const ChartWrapper = styled.div`
  width: 50%;
`
