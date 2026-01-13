import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {

  const [tasks, setTasks] = useState([
      { id: 'task-1', title: 'Придбати житло', isDone: false },
    { id: 'task-2', title: 'Придбати авто', isDone: true },
   ])
   
  const [newTaskTitle, setNemTaskTitle] = useState('')

  const deleteAllTasks = () => {
    const isConfirmed = confirm
    ("Are you sure you want to delete all?")

    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(
      tasks.filter((task) => task.id !==taskId)
    )
  }

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {...task, isDone}
        }
        return task
      })
    )
  }

  const filterTasks = (query) => {
    console.log(`Пошук: ${query}`)
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Data.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }
      setTasks([...tasks, newTask])
      setNemTaskTitle('')
    }
  }

    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
        <AddTaskForm
          addTask={addTask}
          newTaskTitle={newTaskTitle}
          setNemTaskTitle={setNemTaskTitle}
        />
        <SearchTaskForm
        onSearchInput={filterTasks}
        />
       <TodoInfo
        total={tasks.length}
          done={tasks.filter(({ isDone }) => isDone).length}
          onDeleteAllButtonClick={deleteAllTasks}
      />
        <TodoList
          tasks={tasks}
          onDeleteTaskButtonClick={deleteTask}
          onTaskCompleteChange={toggleTaskComplete}
        />
    </div> 
    )
}

export default Todo