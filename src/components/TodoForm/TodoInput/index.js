import React from "react";
import { useField } from "formik";

const TodoInput = (props) => {
  const { name, ...restProps } = props;
  const [field, meta, helpers] = useField(name);
  return <input {...field} {...restProps} />;
};

export default TodoInput;
