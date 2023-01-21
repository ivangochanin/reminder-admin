import React from 'react';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import PageHead from '../../components/common/wrappers/PageHead';

const Reminders = () => {
	return (
		<ViewWrapper>
			<PageHead
				title="Reminders"
				to="/reminders/create"
				buttonText="CREATE REMINDER"
			/>
		</ViewWrapper>
	);
};

export default Reminders;
