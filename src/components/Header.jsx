export function Header(props) {
  const { todos } = props
  const todosLength = todos.length

  const isTasksPlural = todos.length != 1
  const tastOrTasks = isTasksPlural ? "tasks" : "task"

  return (
    <header>
      <h1 className="text-gradient">
        You Have {todosLength} open {tastOrTasks}
      </h1>
    </header>
  )
}
