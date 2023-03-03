import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement);

const CategoryChart = () => {
	const url = process.env.REACT_APP_API_URL;
	const [categories, setCategories] = useState([]);

	const getCategories = async () => {
		try {
			const response = await axios.get(`${url}/admin/categories`);
			setCategories(response.data.allCategories);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log('categories', categories);

	const data = {
		labels: categories?.map((x) => x.name),
		datasets: [
			{
				label: `CATEGORY`,
				data: categories?.map((x) => x.order),
				backgroundColor: [
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 99, 132, 0.2)',
				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(255, 99, 132, 1)',
				],
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
			<Bar data={data} options={options} height={100}/>
		</ChartWrapper>
	);
};

export default CategoryChart;

const ChartWrapper = styled.div`
  width: 50%;
`
