import { TodoItem } from "./TodoItem";

export function TodoList( { todos, ToggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "no Todos"}
      {todos.map((todo) => {
        return (
            <TodoItem {...todo} key={todo.id} ToggleTodo={ToggleTodo}  deleteTodo={deleteTodo} />
        );
      })}
    </ul>
  );
}
