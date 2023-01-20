import React from 'react';
import { BiCommentError } from 'react-icons/bi';
import ViewTemplate from '../components/layout/ViewTemplate';
import { color } from '../configs/utilities';



const Error = () => {
	return (
		<ViewTemplate
			title="Page Not Found !"
			to="/"
			buttonText="Go Home"
			icon={<BiCommentError className="icon" size={'200px'} />}
			iconTextColor={color.yellow}
		/>
	);
};

export default Error;