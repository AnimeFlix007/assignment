import * as Yup from "yup";

export const UserLoginSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Enter a valid e-mail")
    .required("E-mail is required"),
  phoneNo: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone No. is Required"),
});
