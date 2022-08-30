import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { SCHEMA_TASKS } from "../../utils/validateShemas";
import TodoInput from "./TodoInput";
import styles from "./TodoForm.module.scss";

const TodoForm = (props) => {
  const { addTask } = props;
  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{ body: "" }}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_TASKS}
    >
      <Form>
        <TodoInput
          name="body"
          type="text"
          placeholder="Write Note"
          className={styles.a}
        />
        <button type="submit" value="+" className={styles.submit} />
        <ErrorMessage name="body" component="div" />
      </Form>
    </Formik>
  );
};

export default TodoForm;
