import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../configs/utilities';
import { ViewWrapper } from '../components/common/wrappers/Wrappers';
import { DataGrid } from '@mui/x-data-grid';
import env from 'react-dotenv';
import axios from 'axios';
import Button from '@mui/material/Button';


const Categories = () => {
	const url = env.API_URL;
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	const getCategories = async () => {
		try {
			setLoading(true)
			const response = await axios.get(`${url}/admin/categories`)
			console.log(response);
			setCategories(response.data.allCategories);
			setLoading(false)
			
		} catch (error) {
			console.log(error);
			setLoading(false)
		}
	};

	useEffect(() => {
		getCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setCategories]);

	const columns = [
		{ field: '_id', headerName: 'ID', width: 250 },
		{ field: 'name', headerName: 'Name', width: 200 },
		{ field: 'slug', headerName: 'Slug', width: 200 },
		{ field: 'order', headerName: 'Order', width: 200 },
		{ field: 'createdAt', headerName: 'Created At', width: 200 },
	];
	return (
		<ViewWrapper>
			<Header>
				<h1>Categories</h1>
				<Button variant="outlined" size="large">CREATE CATEGORY</Button>
			</Header>
			<TableWrapper>
				<DataGrid
					getRowId={(row) => row._id}
					rows={categories}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					loading={loading}
				/>
			</TableWrapper>
		</ViewWrapper>
	);
};

export default Categories;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  h1 {
	color: ${color.blue};
  }
`

const TableWrapper = styled.div`
	width: 100%;
	height: 700px;  // table MUST have height prop
`;
