import React from 'react';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import PageHead from '../../components/common/wrappers/PageHead';

const RemindersCreate = () => {
	return (
		<ViewWrapper>
			<PageHead
				title="Create Reminder"
				to="/reminders"
				buttonText="SEE ALL REMINDERS"
			/>
		</ViewWrapper>
	);
};

export default RemindersCreate;
