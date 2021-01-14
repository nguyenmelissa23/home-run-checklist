import React, { useState, useEffect } from 'react';
import './App.css';

import Header from 'components/header/header.component'
import TaskList from 'components/taskList/taskList.component';
import TaskInput from 'components/taskInput/taskInput.component';
import {clearTaskList, getTaskList} from 'utils/localStorage';

function App() {

	let taskList = getTaskList();

	

	

  return (
    <div className="App">
      <Header/>
			<TaskInput taskList={taskList}/>
			
    </div>
  );
}



//

export default App;
