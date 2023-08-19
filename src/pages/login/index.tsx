import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { User } from "../../types";
import { UserLoginSchema } from "../../schema/UserSchema";
import { useContext } from "react";
import { UserContextState } from "../../context/UserContext";
import { toast } from "react-toastify";

export default function Login() {
  const ctx = useContext(UserContextState)
  const initialValues: User = {
    name: "",
    email: "",
    phoneNo: 0,
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: UserLoginSchema,
      onSubmit(values) {
        ctx.loginHandler({...values, phoneNo: +values.phoneNo})
        // console.log({...values, phoneNo: +values.phoneNo});
        toast.success("LoggedIn Successfully")
      },
    });
  return (
    <main>
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.name && errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.email && errors.email)}
          helperText={touched.email && errors.email}
          sx={{ mt: 1 }}
        />
        <TextField
          fullWidth
          id="phoneNo"
          name="phoneNo"
          label="Phone No."
          variant="outlined"
          value={values.phoneNo}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.phoneNo && errors.phoneNo)}
          helperText={touched.phoneNo && errors.phoneNo}
          sx={{ mt: 1 }}
        />
        <Button variant="contained" type="submit" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </main>
  );
}
