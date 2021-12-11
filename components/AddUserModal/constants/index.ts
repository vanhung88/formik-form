import * as Yup from "yup";

export const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too Short!")
    .max(30, "Name is too Long!")
    .required("Name field is required field"),
  phone: Yup.string()
    .required("Phone number field is required field")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  id: Yup.string().required("Id field is required field"),
  gender: Yup.string().required("Gender is a required field "),
  dateOfBirth: Yup.date()
    .nullable()
    .typeError("Invalid Date")
    .required("Date of birth is a required field "),
});
