import React, {useEffect, useState} from 'react'; 

import { saveNewTask } from 'utils/firebase';
import TaskList from 'components/taskList/taskList.component';
import {getTaskList, saveTaskList, clearTaskList} from 'utils/localStorage';


// let tasks = getTaskList();

const TaskManager = ({taskList}) => {

	const [input, setInput] = useState('');
	const [tasks, setTasks] = useState(taskList);
	// let tasks = taskList;

	useEffect(() => {
		saveTaskList(tasks);
	});

	function addNewTask (event) {
		console.log('adding...')
		event.preventDefault();
		console.log(tasks);
		console.log(input);
		if (tasks){
			console.log('if');
			tasks.push({
				taskName:input,
				completed: false
			});
			setInput('');
		} else {
			console.log('else');
			setTasks([{
				taskName:input,
				completed: false
			}]);
			setInput('');
		}
	}

	function onUpdateInput (event){
		setInput(event.target.value);
		console.log(event.target.value);
	}

	function onClickClear () {
		clearTaskList();
		setTasks(null);
	}

	return (
		<div>
			<form onSubmit={addNewTask}>
				<label>
					New task: <input onChange={onUpdateInput}  value={input} name='newTask'/>
				</label>
				<button type='submit' className='btn-primary'>Add</button>
			</form>
			<TaskList taskList={tasks}/>
			<button onClick={onClickClear}>-Clear-</button>	
		</div>
	)
}

export default TaskManager;