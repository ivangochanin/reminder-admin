import React from 'react';
import { GiReloadGunBarrel } from 'react-icons/gi';
import ViewTemplate from '../components/layout/ViewTemplate';
import { color } from '../configs/utilities';



const Reminders = () => {
	return (
		<ViewTemplate
			title="Reminders"
			to="/"
			buttonText="Go Home"
			icon={<GiReloadGunBarrel className="icon" size={'200px'} />}
			iconTextColor={color.yellow}
		/>
	);
};

export default Reminders;