import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {

   const tasks = [
    { id: 'task-1', title: 'Придбати житло', isDone: false },
    { id: 'task-2', title: 'Придбати авто', isDone: true },
  ]

  const deleteAllTasks = () => {
    console.log('Видаляємо всі задачі!')
  }

  const deleteTask = (taskId) => {
    console.log (`Видаляємо задачу з id: ${taskId}`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Задача ${taskId} ${isDone ? 'виконана' : 'не виконана'}`)
  }

  const filterTasks = (query) => {
    console.log(`Пошук: ${query}`)
  }

  const addTask = () => {
    console.log('Задача додана!')
  }

    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
        <AddTaskForm
        addTask={addTask}
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