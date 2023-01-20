import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../../configs/utilities';
import { LayoutWrapper } from '../common/wrappers/Wrappers';
import { FaHome } from 'react-icons/fa';
import { BiCategoryAlt } from 'react-icons/bi';
import { MdOutlineCategory } from 'react-icons/md';
import { GiReloadGunBarrel } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<Wrapper>
			<LayoutWrapper>
				<Content>
					<NavLink to="/">
						<FaHome className="icon" size={'30px'} /> 
						<span>Home</span>
					</NavLink>
					<NavLink to="/categories">
						<BiCategoryAlt className="icon" size={'30px'} /> 
						<span>Categories</span>
					</NavLink>
					<NavLink to="/subcategories">
						<MdOutlineCategory className="icon" size={'30px'} /> 
						<span>SubCategories</span>
					</NavLink>
					<NavLink to="/reminders">
						<GiReloadGunBarrel className="icon" size={'30px'} /> 
						<span>Reminders</span>
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
    color: ${color.white};
	display: flex;
	align-items: center;
	column-gap: 10px;
	
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
