import React, { useState, useEffect } from 'react';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import PageHead from '../../components/common/wrappers/PageHead';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { transition, color } from '../../configs/utilities';
import axios from 'axios';

const CategoryCreate = () => {
	const url = process.env.REACT_APP_API_URL;

	const [selectedData, setSelectedData] = useState({
		name: '',
		slug: '',
		order: '',
	});

	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [errors, setErrors] = useState({});

	const handleData = (e) => {
		const newData = { ...selectedData };
		newData[e.target.name] = e.target.value;
		setSelectedData(newData);
	};

	// Run only when we have errors
	useEffect(() => {
		if (loading) {
			createReminder();
			alert('Success');
			setLoading(false);

			// if we do not have any errors than create note
			/* if (Object.keys(errors).length === 0) {
				createReminder();
				alert('Success')
			} else {
				setLoading(false);
			} */
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errors]);

	const createReminder = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			// fetch - second arg - pass object to add props to post request
			/* await fetch(`${url}/admin/categories`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				// in body pass form state
				body: JSON.stringify(selectedData),
			}); */
			await axios.post(`${url}/admin/categories`, selectedData)
			setSuccessMessage('success');
			// when fetch is done go back to home page
		} catch (error) {
			console.log(error);
			setErrorMessage('error message from create');
			setErrors()
		}
	};

	return (
		<ViewWrapper>
			<PageHead
				title="Create Category"
				to="/categories"
				buttonText="SEE ALL CATEGORIES"
			/>
			<Form onSubmit={(e) => createReminder(e)}>
				<InputWrapper>
					<TextField
						name="name"
						type="text"
						size="medium"
						color="info"
						disabled={loading}
						required
						label="Name"
						variant="standard"
						fullWidth
						value={selectedData.name || ''}
						onChange={(e) => handleData(e)}
					/>
					<TextField
						name="slug"
						type="text"
						size="medium"
						color="info"
						disabled={loading}
						required
						label="Slug"
						variant="standard"
						fullWidth
						value={selectedData.slug || ''}
						onChange={(e) => handleData(e)}
					/>
					<TextField
						name="order"
						type="number"
						size="medium"
						color="info"
						disabled={loading}
						label="Order"
						variant="standard"
						fullWidth
						value={selectedData.order || ''}
						onChange={(e) => handleData(e)}
					/>
				</InputWrapper>

				<ButtonWrapper>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						size="large"
					>
						Create Category
					</Button>
				</ButtonWrapper>
				<MessageBox>
					<MessageSuccess>
						{successMessage ? successMessage : ''}
					</MessageSuccess>
					<MessageError>{errorMessage ? errorMessage : ''}</MessageError>
				</MessageBox>
			</Form>
		</ViewWrapper>
	);
};

export default CategoryCreate;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 30px;
`;

const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	column-gap: 40px;
`;

const MessageBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 250px;
	font-weight: 400;
	min-height: 80px;
	font-size: 16px;
	text-align: center;
`;
const MessageSuccess = styled.span`
	color: ${color.blue};
`;

const MessageError = styled.span`
	color: ${color.red};
`;

const ButtonWrapper = styled.div`
	padding-top: 20px;
`;

const Button = styled.button`
	padding: 15px 20px;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	border-radius: 4px;
	color: ${color.white};
	background: ${color.blue};
	outline: none;
	border: none;
	cursor: pointer;
	transition: ${transition.default};
	@media (hover: hover) {
		&:hover {
			opacity: 0.9;
		}
	}
`;
