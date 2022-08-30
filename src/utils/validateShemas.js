import * as Yup from "yup";

export const SCHEMA_TASK = Yup.string("Must be string")
  .min(1)
  .max(100)
  .required("Must be required");

export const SCHEMA_TASKS = Yup.object({
  body: SCHEMA_TASK,
});
