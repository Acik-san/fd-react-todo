import React, { useState } from "react";
import useTodo from "../../hooks";
import TodoForm from "../TodoForm";
import config from "../../config";
import styles from "./Todo.module.scss";

const Todo = () => {
  const [selectList, setSelectList] = useState("All");
  const { tasks, addTask, deleteTask, setDone } = useTodo([
    {
      id: Date.now(),
      body: "test task",
      isAppointed: true,
      isDone: false,
    },
  ]);
  const handlerSelect = ({ target: { value } }) => {
    setSelectList(value);
  };
  const showSelect = (value) => {
    return <option value={value}>{value}</option>;
  };
  const list = (task) => (
    <li key={task.id} className={styles.li}>
      <p className={styles.task}>{task.body}</p>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => setDone(task.id)}
        className={styles.checkbox}
      />
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
        className={styles.delete_task}
      >
        X
      </button>
    </li>
  );
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.head}>Todo list</h1>
      <div className={styles.flex}>
        <TodoForm addTask={addTask} />
        <select onChange={handlerSelect}>
          {config.TODO_SELECT.map(showSelect)}
        </select>
      </div>
      <ul>
        {selectList === "All"
          ? tasks.map(list)
          : selectList === "Done"
          ? tasks.filter((task) => task.isDone).map(list)
          : tasks.filter((task) => task.isAppointed).map(list)}
      </ul>
    </div>
  );
};

export default Todo;
