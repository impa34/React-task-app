import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCounter() {
    const {tasks} = useContext(TaskContext)
    
  const completedCount = tasks.filter(task => task.completed).length
  const pendingCount = tasks.filter(task => !(task.completed)).length

  return (
    <div>
        <div>Total completed tasks: {completedCount}</div>
        <div>Total pending tasks: {pendingCount}</div>
    </div>
  )
}

export default TaskCounter