import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const SubCategoryChart = () => {
	const url = process.env.REACT_APP_API_URL;
	const [subCategories, setSubCategories] = useState([]);


	const getSubCategories = async () => {
		try {
	
			const response = await axios.get(`${url}/admin/subcategories`);
			setSubCategories(response.data.allSubCategories);
	
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSubCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log('categories', subCategories);

	const data = {
		labels: subCategories?.map((x) => x.name),
		datasets: [
			{
				label: `Coins Available`,
				data: subCategories?.map((x) => x.order),
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 4,
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
			<Doughnut data={data} options={options} height={400}/>
		</ChartWrapper>
	);
};

export default SubCategoryChart;

const ChartWrapper = styled.div`
  width: 50%;
`
