export const localStorage = window.localStorage;

export const saveTaskList = (taskList) => {
	localStorage.setItem('taskObj', JSON.stringify(taskList))
}

export const getTaskList = () => {
	const taskList =	JSON.parse(localStorage.getItem('taskObj'));
	return taskList;
}

export const clearTaskList = () => {
	localStorage.clear();
	return null;
}

export const updateTaskStatus = (index, updatedTask, taskList) => {
	taskList[index] = updatedTask;
	saveTaskList(taskList);
	console.log(taskList[index])
}
// clearTaskList();