import * as Yup from 'yup';
const Validator = Yup.object().shape({
  nm: Yup.string().required("username is required").min(5, "uname must have min 5 character ").max(10, "unsername must greadter than 10"),

  ag: Yup.number().required("age is required").min(10, "ag must have min minimum 10 years ").max(20, "age must greadter than 10 years"),
  email: Yup.string().required("email is required").email("email is invalid"),
  loc: Yup.string().required("location is required"),
  gen: Yup.string().required("Gender is required"),
  edu: Yup.array().min(1).of(Yup.string().required()).required(),
  multiple: Yup.string().required("Filed is required")
})

export default Validator