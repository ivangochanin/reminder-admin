import React from 'react';
import { MdOutlineCategory } from 'react-icons/md';
import ViewTemplate from '../components/layout/ViewTemplate';
import { color } from '../configs/utilities';



const SubCategories = () => {
	return (
		<ViewTemplate
			title="SubCategories"
			to="/"
			buttonText="Go Home"
			icon={<MdOutlineCategory className="icon" size={'200px'} />}
			iconTextColor={color.yellow}
		/>
	);
};

export default SubCategories;