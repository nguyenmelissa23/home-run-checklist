import React from 'react'; 

// import uncheckedBox from 'assets/uncheckedBox.png';

const Task = ({taskObj}) => {

	function handleClickOnBox(){ 
		console.log('check the box');
	}

	return (
		<div>
			{
				taskObj.completed ?
				<span className='taskBox' onClick={handleClickOnBox}>☑ </span>
				:<span className='taskBox' onClick={handleClickOnBox}>□ </span>
			}
			<span className='taskName'>{taskObj.name}</span>
		</div>
	)
}

export default Task;