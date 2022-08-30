import { useState } from "react";

const useTodo = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  return {
    tasks,
    addTask: (values) => {
      const newTask = {
        id: Date.now(),
        body: values.body,
        isAppointed: true,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
    },
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    setDone: (id) => {
      setTasks(
        tasks.map((task) => {
          return task.id === id
            ? { ...task, isAppointed: false, isDone: true }
            : { ...task };
        })
      );
    },
  };
};

export default useTodo;
