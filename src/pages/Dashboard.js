import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../configs/utilities';
import { ViewWrapper } from '../components/common/wrappers/Wrappers';



const Dashboard = () => {
	return (
		<PageWrapper>
			<ViewWrapper>
				<Wrapper>

				</Wrapper>
			</ViewWrapper>
		</PageWrapper>
	);
};

export default Dashboard;

const PageWrapper = styled.div`
	@media screen and (min-width: ${breakpoint.xl}) {
		background: ${color.white};
	}
`;

const Wrapper = styled.div`
`;
