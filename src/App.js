import React, { useState, useEffect, useRef } from 'react';
import { Home, Categories, SubCategories, Reminders, Error } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { showContainer } from './configs/animations';
import styled from 'styled-components';

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
			<Navbar />
			<AnimationWrapper ref={containerContent}>
				<Routes>
					<Route path="/" element={<Home />} exact={true} />
					<Route path="/categories" element={<Categories />} exact={true} />
					<Route path="/subcategories" element={<SubCategories />} exact={true} />
					<Route path="/reminders" element={<Reminders />} exact={true} />
					<Route path="*" element={<Error />} />
				</Routes>
			</AnimationWrapper>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

const AnimationWrapper = styled.div`
	visibility: hidden;
`;
