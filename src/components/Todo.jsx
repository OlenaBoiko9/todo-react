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

    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
       <TodoInfo
        total={tasks.length}
          done={tasks.filter(({ isDone }) => isDone).length}
          onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList tasks={tasks} />
    </div> 
    )
}

export default Todo