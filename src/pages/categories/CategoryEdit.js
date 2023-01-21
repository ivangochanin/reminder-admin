import React from 'react';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import PageHead from '../../components/common/wrappers/PageHead'

const CategoryEdit = () => {
	return (
		<ViewWrapper>
            <PageHead
			 title='Edit Category'
			 to="/categories" 
			 buttonText='SEE ALL CATEGORIES'
			/>
		</ViewWrapper>
	);
};

export default CategoryEdit;
