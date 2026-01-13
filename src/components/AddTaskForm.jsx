import Button from "./Button"
import Field from "./Field"

const AddTaskForm = (props) => {
    const {
        addTask,
        nemTaskTitle,
        setNemTaskTitle,
    } = props

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }
    return (
    <form className="todo__form" onSubmit={onSubmit}>
            <Field
                className="todo__field"
                label="New task title"
                id="new-task"
                value={nemTaskTitle}
                onInput={(event) => setNemTaskTitle (event.target.value)}
            />
       <Button type='submit'>Add</Button>
    </form>
    )
}

export default  AddTaskForm