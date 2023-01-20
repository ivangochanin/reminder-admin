import React from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import ViewTemplate from '../components/layout/ViewTemplate';
import { color } from '../configs/utilities';

const Categories = () => {
	return (
		<ViewTemplate
			title="Categories"
			to="/"
			buttonText="Go Home"
			icon={<BiCategoryAlt className="icon" size={'200px'} />}
			iconTextColor={color.yellow}
		/>
	);
};

export default Categories;