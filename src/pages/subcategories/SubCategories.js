import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import ViewWrapper from '../../components/common/wrappers/ViewWrapper';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import axios from 'axios';
import PageHead from '../../components/common/wrappers/PageHead';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { color } from '../../configs/utilities';

const SubCategories = () => {
	const url = process.env.REACT_APP_API_URL;
	const [subCategories, setSubCategories] = useState([]);
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [selectedSubCategory, setSelectedSubCategory] = useState({});

	const navigate = useNavigate();

	const getSubCategories = async () => {
		try {
			setLoading(true);
			const response = await axios.get(`${url}/admin/subcategories`);
			setSubCategories(response.data.allSubCategories);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getSubCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const editSubCategory = useCallback(
		(id) => () => {
			navigate(`/subcategories/${id}/edit`);
		},
		[navigate]
	);

	const openDeleteModal = useCallback(
		(subCategory) => () => {
			setSelectedSubCategory(subCategory.row);
			handleOpen();
		},
		[]
	);

	const deleteSubCategory = async () => {
		try {
			await axios.delete(
				`${url}/admin/subcategories/${selectedSubCategory._id}`
			);
			handleClose();
			getSubCategories();
		} catch (error) {
			console.log(error);
		}
	};

	const columns = useMemo(
		() => [
			{
				field: 'name',
				renderHeader: () => <TableHead>NAME</TableHead>,
				renderCell: (params) => <strong>{params.row.name}</strong>,
				flex: 3,
				minWidth: 200,
				headerClassName: 'headerClassName',
			},
			{
				field: 'category',
				renderHeader: () => <TableHead>CATEGORY</TableHead>,
				renderCell: (params) => <p>{params.row.category?.name}</p>,
				flex: 1,
				minWidth: 200,
				headerClassName: 'headerClassName',
			},

			{
				field: 'slug',
				renderHeader: () => <TableHead>SLUG</TableHead>,
				flex: 1,
				minWidth: 200,
				headerClassName: 'headerClassName',
			},
			{
				field: '_id',
				renderHeader: () => <TableHead>ID</TableHead>,
				flex: 1,
				minWidth: 200,
				headerClassName: 'headerClassName',
			},
			{
				field: 'createdAt',
				renderHeader: () => <TableHead>CREATED AT</TableHead>,
				type: 'date',
				flex: 1,
				minWidth: 200,
				headerClassName: 'headerClassName',
			},
			{
				field: 'order',
				renderHeader: () => <TableHead>ORDER</TableHead>,
				width: 85,
				headerClassName: 'headerClassName',
			},
			{
				field: 'actions',
				type: 'actions',
				renderHeader: () => <TableHead>ACTIONS</TableHead>,
				width: 150,
				headerClassName: 'headerClassName',
				getActions: (params) => [
					<GridActionsCellItem
						icon={
							<MdOutlineModeEditOutline
								size={'25px'}
								style={{ color: color.green, opacity: 0.7 }}
							/>
						}
						label="Edit"
						onClick={editSubCategory(params.id)}
					/>,
					<GridActionsCellItem
						icon={
							<RiDeleteBin4Line
								size={'25px'}
								style={{ color: color.red, opacity: 0.7 }}
							/>
						}
						label="Delete"
						onClick={openDeleteModal(params)}
					/>,
				],
			},
		],
		[openDeleteModal, editSubCategory]
	);

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};
	return (
		<ViewWrapper>
			<PageHead
				title="SubCategory"
				to="/subcategories/create"
				buttonText="CREATE SUBCATEGORY"
			/>

			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<div>Are you sure?!!?</div>
					<Button
						variant="contained"
						color="error"
						size="small"
						onClick={deleteSubCategory}
					>
						Delete SubCategory
					</Button>
					{selectedSubCategory.name} SUBCATEGORY ?
				</Box>
			</Modal>
			<TableWrapper>
				<DataGrid
					sx={{ border: 0 }}
					getRowId={(row) => row._id}
					rows={subCategories}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[10]}
					loading={loading}
				/>
			</TableWrapper>
		</ViewWrapper>
	);
};

export default SubCategories;

const TableWrapper = styled.div`
	width: 100%;
	height: 700px; // table MUST have height prop
	margin: 0 auto;
	.headerClassName {
		background: #edf3fb;
		border-bottom: 2px solid ${color.gray};
		border-left: .5px solid ${color.gray};
	}
`;

const TableHead = styled.p`
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 2px;
	color: ${color.blue};
`;
