import React, { useState, useEffect } from 'react';
import { ViewWrapper } from '../components/common/wrappers/Wrappers';
import { DataGrid } from '@mui/x-data-grid';
import env from 'react-dotenv';
import axios from 'axios';

const Categories = () => {
	const url = env.API_URL;
	const [categories, setCategories] = useState([]);

	const getCategories = async () => {
		axios
			/* .get(`${url}/admin/categories`) */
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				console.log(res);
				setCategories(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setCategories]);

	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'title', headerName: 'Title', width: 130 },
		{ field: 'content', headerName: 'Content', width: 130 },
		{ field: 'created', headerName: 'Created', width: 130 },
	];

	/* const rows = [
		{ id: 1, content: 'Snow', title: 'Jon', age: 35 },
		{ id: 2, content: 'Tod', title: 'Zorn', age: 42 },
		{ id: 3, content: 'Jan', title: 'Jaime', age: 45 },
		{ id: 4, content: 'Stark', title: 'Copland', age: 16 },
		{ id: 5, content: 'Aaron', title: 'Goldberg', age: null },
		{ id: 6, content: 'Melisa', title: null, age: 150 },
		{ id: 7, content: 'Clifford', title: 'Ferrara', age: 44 },
		{ id: 8, content: 'Frances', title: 'Rossini', age: 36 },
		{ id: 9, content: 'Roxie', title: 'Harvey', age: 65 },
	]; */

	return (
		<ViewWrapper>
			<div style={{ height: 900, width: '100%' }}>
				<DataGrid
					rows={categories}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
			{categories.map(category => (
				<span key={category.id}>{category.title}</span>
			))}
		</ViewWrapper>
	);
};

export default Categories;
