import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../configs/utilities';
import { ViewWrapper } from '../components/common/wrappers/Wrappers';

const Home = () => {
	return (
		<PageWrapper>
			<ViewWrapper>
				<Wrapper>Dashboard App with Data Grid Visualization, Charts ...</Wrapper>
			</ViewWrapper>
		</PageWrapper>
	);
};

export default Home;

const PageWrapper = styled.div`
	@media screen and (min-width: ${breakpoint.xl}) {
		background: ${color.white};
	}
`;

const Wrapper = styled.div``;
