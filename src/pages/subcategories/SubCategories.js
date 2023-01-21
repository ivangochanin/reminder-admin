import React from 'react';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import PageHead from '../../components/common/wrappers/PageHead';

const SubCategories = () => {
	return (
		<ViewWrapper>
			<PageHead
				title="SubCategory"
				to="/subcategories/create"
				buttonText="CREATE SUBCATEGORY"
			/>
		</ViewWrapper>
	);
};

export default SubCategories;
