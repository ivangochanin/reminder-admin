import React from 'react';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import PageHead from '../../components/common/wrappers/PageHead';

const SubCategoriesCreate = () => {
	return (
		<ViewWrapper>
			<PageHead
				title="Create SubCategories"
				to="/subcategories"
				buttonText="SEE ALL SUBCATEGORIES"
			/>
		</ViewWrapper>
	);
};

export default SubCategoriesCreate;
