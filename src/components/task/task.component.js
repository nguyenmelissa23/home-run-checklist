import React, {useState, useEffect} from 'react'; 

// import uncheckedBox from 'assets/uncheckedBox.png';
import {updateTaskStatus, deleteTask} from 'utils/localStorage';

import './task.styles.css'
const Task = ({taskList, taskObj, index}) => {
	
	const [task, updateTask] = useState(taskObj)

	useEffect(() => {
		updateTaskStatus(index, task, taskList);
	}, [task, index, taskList]);

	function handleClickOnBox(){ 
		console.log('check the box');
		updateTask({
			taskName: task.taskName, 
			completed: !task.completed
		})
	}

	function handleClickX(){
		console.log('click on x');
		updateTask(null);
		deleteTask(index, taskList);
	}

	if (task){
		return (
			<div>
				{
				task.completed ?
				<span className='taskBox' onClick={handleClickOnBox}>☑ </span>
				:<span className='taskBox' onClick={handleClickOnBox}>□ </span>
				}
			<span className='taskName'>{task.taskName}</span>
			<span className='taskX' onClick={handleClickX}>x</span>
		</div>
		)
	} else {
		return null;
	}

	
}

export default Task;