import "./index.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="TodoItem">
      <h3 className="todo">{todo.todo}</h3>
      <p>{todo.completed ? "✅" : "◻️"}</p>
    </div>
  );
};

export default TodoItem;
