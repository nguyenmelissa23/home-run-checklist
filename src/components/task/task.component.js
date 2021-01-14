import React, {useState, useEffect} from 'react'; 

// import uncheckedBox from 'assets/uncheckedBox.png';
import {updateTaskStatus} from 'utils/localStorage';
const Task = ({taskList, taskObj, index}) => {
	
	const [task, updateTask] = useState(taskObj)

	useEffect(() => {
		updateTaskStatus(index, task, taskList);
	}, [task, index, taskList])

	function handleClickOnBox(){ 
		console.log('check the box');
		updateTask({
			taskName: task.taskName, 
			completed: !task.completed
		})
	}

	return (
		<div>
			{
				task.completed ?
				<span className='taskBox' onClick={handleClickOnBox}>☑ </span>
				:<span className='taskBox' onClick={handleClickOnBox}>□ </span>
			}
			<span className='taskName'>{task.taskName}</span>
		</div>
	)
}

export default Task;