import "./index.css";
import TodoItem from "../todoItem/TodoItem";
import todos from "../mock";
import { useState } from "react";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [newArray, setNewArray] = useState([...todos]);

  const linkArray = (newValue) => {
    if (newValue) {
      const newTask = {
        id: newArray.length + 1,
        todo: newValue,
        completed: false,
      };
      setNewArray([...newArray, newTask]);
    }
  };

  const getInput = (e) => {
    e.preventDefault();
    const newValue = e.target[0].value;
    e.target[0].value = "";
    setValue("");
    linkArray(newValue);
  };

  return (
    <div className="TodoList">
      {newArray.map((todo) => (
        <TodoItem todo={todo} />
      ))}
      <form action="submit" onSubmit={(e) => getInput(e)}>
        <input
          type="text"
          name="newTask"
          id="newTask"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TodoList;
