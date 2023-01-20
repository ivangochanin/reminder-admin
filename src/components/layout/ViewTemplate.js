import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../../configs/utilities';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import { Link } from 'react-router-dom';

const ViewTemplate = (props) => {
	return (
		<PageWrapper>
			<ViewWrapper>
				<Wrapper iconTextColor={props.iconTextColor}>
					<IconWrapper>{props.icon}</IconWrapper>
					<h1>{props.title}</h1>
					<Link to={props.to}>
						<Button>{props.buttonText}</Button>
					</Link>
				</Wrapper>
			</ViewWrapper>
		</PageWrapper>
	);
};

export default ViewTemplate;

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	color: ${color.blue};

	@media screen and (min-width: ${breakpoint.xl}) {
	}
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    padding-top: 100px;
	h1,
	.icon {
		color: ${(props) => props.iconTextColor || color.white};
	}

	a {
		color: ${color.white};
	}
`;

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 50px;
	border-radius: 20px;
	background: ${color.blue};
	font-size: 24px;
	font-weight: 700;
	letter-spacing: 1px;
	margin-top: 50px;
`;

const IconWrapper = styled.div``;
