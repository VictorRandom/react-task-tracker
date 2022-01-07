import React, { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  
  const [tasks, setTasks] = useState([   
    {
        id: 1,
        text: 'Consulta médica',
        day:'5 de fevereiro as 14:30h',
        reminder: true,
    },
    {
        id: 2,
        text: 'Reunião escolar',
        day:'6 de fevereiro as 13:30h',
        reminder: true,
    },
    {
        id: 3,
        text: 'Almoço no Shopping',
        day:'5 de fevereiro as 12:30h',
        reminder: false,
    }
])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} />) : ( 'No Tasks To Show' )}
    </div>
  );
}

export default App;
