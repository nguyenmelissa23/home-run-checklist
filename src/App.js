import React, { useState, useEffect } from 'react';
import './App.css';

import Header from 'components/header/header.component';
import TaskList from 'components/taskList/taskList.component';
import TaskInput from 'components/taskInput/taskInput.component';
import {getTaskList} from 'utils/localStorage';
import TaskManager from 'components/taskInput/taskInput.component';

function App() {

	let taskList = getTaskList();
  return (
    <div className="App">
      <Header/>
			<TaskManager taskList={taskList}/>
    </div>
  );
};

export default App;
