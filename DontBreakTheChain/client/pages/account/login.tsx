import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { LoginForm } from "../../interfaces/AccountForm";
import { useRouter } from "next/router";
import { useAccount } from "../../stores/AccountContext";
import IUser from "../../interfaces/IUser";

const Login = (props: any) => {
  const [user, setUser] = useAccount();
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState({
    EmailOrUsername: "",
    Password: ""
  } as LoginForm);

  const router = useRouter();

  async function handleSubmit(event: any) {
    event.preventDefault();
    setErrorMessage("");

    setFormValues({
      EmailOrUsername: event.target[0].value,
      Password: event.target[2].value
    });
    console.log(formValues);
    const response = await fetch("https://localhost:7034/api/User/login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(formValues)
    }).then(res => {
      console.log(res)
      return res.ok
    });

    if (response && errorMessage == "") {
      setUser({
        Email: formValues.EmailOrUsername,
        Username: formValues.EmailOrUsername,
        isLoggedIn: true
      } as IUser);
      router.push("/");
    }
    else setErrorMessage("Email not found!");
  }

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      autoComplete="on"
      gap={2.5}
      m={10}>
      <TextField
        required
        name="email"
        label="required"
        helperText="Email"
        type="email"
        variant="standard" />
      <TextField
        required
        name="username"
        label="required"
        helperText="Username"
        variant="standard" />
      <TextField
        required
        name="password"
        label="required"
        helperText="Password"
        type="password"
        variant="standard" />
      {errorMessage && <Typography
        color="red"
      >
        Test typo
      </Typography>}
      <Button
        type="submit"
        variant="contained"
      >Login</Button>
    </Stack>
  );
}
export default Login;