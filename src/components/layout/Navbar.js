import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../../configs/utilities';
import { LayoutWrapper } from '../common/wrappers/Wrappers';

const Navbar = () => {
	return (
		<Wrapper>
			<LayoutWrapper>
				<Content>Admin Panel</Content>
			</LayoutWrapper>
		</Wrapper>
	);
};

export default Navbar;

const Wrapper = styled.div`
	width: 100%;
	background: ${color.silver};
	color: ${color.black};
	font-size: 30px;
	font-weight: 300;

	@media screen and (min-width: ${breakpoint.xxl}) {
		font-size: 40px;
		font-weight: 400;
	}
`;

const Content = styled.div`
	width: 100%;
	min-height: 7vh;
	display: flex;
	justify-content: start;
	align-items: center;

	@media screen and (min-width: ${breakpoint.xl}) {
	}
`;
