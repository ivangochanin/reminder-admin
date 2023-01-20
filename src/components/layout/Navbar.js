import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../../configs/utilities';
import { LayoutWrapper } from '../common/wrappers/Wrappers';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<Wrapper>
			<LayoutWrapper>
				<Content>
					<NavLink to="/">
						<FaHome className="icon" size={'30px'} /> 
						Home
					</NavLink>
				</Content>
			</LayoutWrapper>
		</Wrapper>
	);
};

export default Navbar;

const Wrapper = styled.div`
	width: 100%;
	background: ${color.blue};

  a {
    color: ${color.white}
  }
`;

const Content = styled.div`
	width: 100%;
	min-height: 7vh;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (min-width: ${breakpoint.xl}) {
	}
`;
