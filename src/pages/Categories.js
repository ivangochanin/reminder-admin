import React from 'react';
import { ViewWrapper } from '../components/common/wrappers/Wrappers';
import { DataGrid } from '@mui/x-data-grid';

const Categories = () => {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'firstName', headerName: 'First name', width: 130 },
		{ field: 'lastName', headerName: 'Last name', width: 130 },
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			width: 90,
		},
		{
			field: 'fullName',
			headerName: 'Full name',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
			valueGetter: (params) =>
				`${params.row.firstName || ''} ${params.row.lastName || ''}`,
		},
	];

	const rows = [
		{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
		{ id: 2, lastName: 'Tod', firstName: 'Zorn', age: 42 },
		{ id: 3, lastName: 'Jan', firstName: 'Jaime', age: 45 },
		{ id: 4, lastName: 'Stark', firstName: 'Copland', age: 16 },
		{ id: 5, lastName: 'Aaron', firstName: 'Goldberg', age: null },
		{ id: 6, lastName: 'Melisa', firstName: null, age: 150 },
		{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
		{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
		{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
	];

	return (
		<ViewWrapper>
			<div style={{ height: 900, width: '100%' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</ViewWrapper>
	);
};

export default Categories;
