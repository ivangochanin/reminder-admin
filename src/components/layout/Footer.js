import React from 'react';
import styled from 'styled-components';
import { color } from '../../configs/utilities';
import { LayoutWrapper } from '../common/wrappers/Wrappers';

const Footer = () => {
	return (
		<Wrapper>
			<LayoutWrapper>
				<Content>©Lorem 2022, All Rights Reserved</Content>
			</LayoutWrapper>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.div`
	width: 100%;
	background: ${color.blue};
	color: ${color.white};
`;

const Content = styled.div`
	min-height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 14px;
	font-weight: 300;
`;
