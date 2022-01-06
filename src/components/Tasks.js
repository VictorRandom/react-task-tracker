import React, { useState } from 'react'

function Tasks() {

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

    return (
        
        <>
            {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
            ))}            
        </>
    )
}

export default Tasks;
