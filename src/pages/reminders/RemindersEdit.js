import React from 'react';
import { ViewWrapper } from '../../components/common/wrappers/Wrappers';
import PageHead from '../../components/common/wrappers/PageHead';

const RemindersEdit = () => {
	return (
		<ViewWrapper>
			<PageHead
				title="Edit Reminder"
				to="/reminders"
				buttonText="SEE ALL REMINDERS"
			/>
		</ViewWrapper>
	);
};

export default RemindersEdit;
