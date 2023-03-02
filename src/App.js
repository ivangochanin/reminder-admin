import React, { useState, useEffect, useRef } from 'react';
import {
	Home,
	Categories,
	CategoryCreate,
	CategoryEdit,
	SubCategories,
	SubCategoriesCreate,
	SubCategoriesEdit,
	Reminders,
	RemindersCreate,
	RemindersEdit,
	Error,
} from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import { showContainer } from './configs/animations';
import styled from 'styled-components';
import { LayoutWrapper } from './components/common/wrappers/Wrappers';
import { breakpoint } from './configs/utilities';

function App() {
	const [playAnimation, setPlayAnimation] = useState(false);
	const containerContent = useRef(null);

	useEffect(() => {
		const onPageLoad = () => {
			setPlayAnimation(true);
		};

		if (document.readyState === 'complete') {
			onPageLoad();
		} else {
			window.addEventListener('load', onPageLoad);
			return () => window.removeEventListener('load', onPageLoad);
		}
		if (playAnimation) {
			showContainer(containerContent);
		}
	}, [playAnimation]);

	return (
		<BrowserRouter>
			<LayoutWrapper>
				<AnimationWrapper ref={containerContent}>
					<SidebarWrapper>
						<Sidebar />
					</SidebarWrapper>

					<ContentWrapper>
						<Routes>
							<Route path="/" element={<Home />} exact={true} />
							<Route path="/categories" element={<Categories />} exact={true} />
							<Route
								path="/categories/create"
								element={<CategoryCreate />}
								exact={true}
							/>
							<Route
								path="/categories/:id/edit"
								element={<CategoryEdit />}
								exact={true}
							/>
							<Route
								path="/subcategories"
								element={<SubCategories />}
								exact={true}
							/>
							<Route
								path="/subcategories/create"
								element={<SubCategoriesCreate />}
								exact={true}
							/>
							<Route
								path="/subcategories/:id/edit"
								element={<SubCategoriesEdit />}
								exact={true}
							/>
							<Route path="/reminders" element={<Reminders />} exact={true} />
							<Route
								path="/reminders/create"
								element={<RemindersCreate />}
								exact={true}
							/>
							<Route
								path="/reminders/:id/edit"
								element={<RemindersEdit />}
								exact={true}
							/>
							<Route path="*" element={<Error />} />
						</Routes>
					</ContentWrapper>
				</AnimationWrapper>
				<Footer />
			</LayoutWrapper>
		</BrowserRouter>
	);
}

export default App;

const AnimationWrapper = styled.div`
	visibility: hidden;
	display: flex;
`;

const SidebarWrapper = styled.div`
	display: none;
	@media screen and (min-width: ${breakpoint.lg}) {
		display: block;
		width: 300px;
	}
`;

const ContentWrapper = styled.div`
	width: 100%;
	@media screen and (min-width: ${breakpoint.lg}) {
		width: calc(100% - 300px);
	}
`;
