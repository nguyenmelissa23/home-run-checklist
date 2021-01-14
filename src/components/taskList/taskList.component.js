import React from 'react';

import Task from 'components/task/task.component';
import {getCurrentTasklist} from 'utils/firebase.js';
import {getTaskList, saveTaskList, clearTaskList} from 'utils/localStorage';

// let tasks = getTaskList();

// const tasks = await getCurrentTasklistO();


const TaskList = ({taskList}) => {
	if (taskList){
		return (
			taskList.map((task, index) => {
				return (
					<div>
						<div key={index}>
							<Task taskObj={task} index={index} taskList={taskList}/>
						</div>
					</div>
				)
			})
		)
	} else {
		return (
			<p>Please add tasks!</p>
		)
	}
}

export default TaskList;

