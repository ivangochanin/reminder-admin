import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../../configs/utilities';
import { ViewWrapper } from '../common/wrappers/Wrappers';
import { FaHome } from 'react-icons/fa';
import { BiCategoryAlt } from 'react-icons/bi';
import { MdOutlineCategory } from 'react-icons/md';
import { GiReloadGunBarrel } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<Wrapper>
			<ViewWrapper>
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
			</ViewWrapper>
		</Wrapper>
	);
};

export default Sidebar;

const Wrapper = styled.div`
	width: 100%;
	background: ${color.blue};

.active {
    color: ${color.yellow};
}

  a {
    color: ${color.white};
	display: flex;
	align-items: center;
	column-gap: 10px;
	font-size: 16px;
    font-weight: 600;
    @media screen and (min-width: ${breakpoint.xxl}) {
		font-size: 18px;
    font-weight: 600;
	}
  }
`;

const Content = styled.div`
	width: 100%;
	display: flex;
    flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
    row-gap: 20px;

	@media screen and (min-width: ${breakpoint.xl}) {
	}
`;
