import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import axios from 'axios';
import PageHead from '../../components/common/wrappers/PageHead';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { MdOutlineModeEditOutline } from 'react-icons/md';

const Categories = () => {
	const url = process.env.REACT_APP_API_URL;
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	const getCategories = async () => {
		try {
			setLoading(true);
			const response = await axios.get(`${url}/admin/categories`);
			setCategories(response.data.allCategories);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setCategories]);

	const editCategory = useCallback(
		(id) => () => {
			console.log('edit category', id);
			/* setTimeout(() => {
			setRows((prevRows) => prevRows.filter((row) => row.id !== id));
		  }); */
		},
		[]
	);

	const deleteCategory = useCallback(
		(id) => () => {
			console.log('delete category', id);
			/* setTimeout(() => {
			setRows((prevRows) => prevRows.filter((row) => row.id !== id));
		  }); */
		},
		[]
	);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const columns = useMemo(
		() => [
			{ field: '_id', headerName: 'ID', width: 250 },
			{ field: 'name', headerName: 'NAME', width: 200 },
			{ field: 'slug', headerName: 'SLUG', width: 200 },
			{ field: 'order', headerName: 'ORDER', width: 200 },
			{ field: 'createdAt', headerName: 'CREATED AT', type: 'date', width: 200 },
			{
				field: 'actions',
				type: 'actions',
				headerName: 'ACTIONS',
				width: 80,
				getActions: (params) => [
					<GridActionsCellItem
						icon={<MdOutlineModeEditOutline />}
						label="Edit"
						onClick={editCategory(params.id)}
					/>,
					<GridActionsCellItem
						icon={<RiDeleteBin4Line />}
						label="Delete"
						onClick={deleteCategory(params.id)}
					/>,
				],
			},
		],
		[deleteCategory, editCategory]
	);
	return (
		<ViewWrapper>
			<PageHead
				title="CATEGORIES"
				to="/categories/create"
				buttonText="CREATE CATEGORY"
			/>
			<TableWrapper>
				<DataGrid
					sx={{ border: 0 }}
					getRowId={(row) => row._id}
					rows={categories}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[10]}
					loading={loading}
				/>
			</TableWrapper>
		</ViewWrapper>
	);
};

export default Categories;

const TableWrapper = styled.div`
	width: 100%;
	height: 700px; // table MUST have height prop
`;
