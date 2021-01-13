import React from 'react';

import Task from 'components/task/task.component';

const tasks = [
	{name: 'water the plant', 
	completed: false, 
	id: 0
	},
	{name: 'sweep the floor', 
	completed: false, 
	id: 1
	},
	{name: 'wash the dishes', 
	completed: true, 
	id: 2
	},
];

const TaskList = () => {
	return (
		tasks.map( task => {
			return (
				<div key={task.id}>
					<Task taskObj={task}/>
					{/*<h4 className='task'>{task} </h4>*/}
				</div>
			)
		}));	
}

export default TaskList;