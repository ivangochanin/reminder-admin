import React from 'react';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import PageHead from '../../components/common/wrappers/PageHead';

const SubCategoriesEdit = () => {
	return (
		<ViewWrapper>
			<PageHead
				title="Edit SubCategories"
				to="/subcategories"
				buttonText="SEE ALL SUBCATEGORIES"
			/>
		</ViewWrapper>
	);
};

export default SubCategoriesEdit;
