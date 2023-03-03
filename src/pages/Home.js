import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../configs/utilities';
import ViewWrapper from '../components/common/wrappers/ViewWrapper';
import PageHead from '../components/common/wrappers/PageHead';
import CategoryChart from '../components/common/charts/CategoryChart'
import ReminderChart from '../components/common/charts/ReminderChart'
import SubCategoryChart from '../components/common/charts/SubCategoryChart'


const Home = () => {
	return (
		<PageWrapper>
			<ViewWrapper>
				<Wrapper>
					<PageHead
						title="Dashboard"
						to="/reminders"
						buttonText="SEE ALL REMINDERS"
					/>
				{/* 	<ul>
					 <h3>To do: </h3>
						<li>Data Grid Visualization</li>
						<li>Popular ...</li>
						<li>Last added</li>
					</ul> */}
					<Charts>
						<SubCategoryChart/>
						<ReminderChart/>
						<CategoryChart/>
					</Charts>
				</Wrapper>
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

const Wrapper = styled.div`
	ul {
		margin: 50px;
	}
`;


const Charts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
`