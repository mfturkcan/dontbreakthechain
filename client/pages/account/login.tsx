import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { LoginForm } from "../../interfaces/AccountForm";
import { useRouter } from "next/router";
import { useAccount } from "../../stores/AccountContext";


const Login = (props: any) => {
    const [user, setUser] = useAccount();
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [formValues, setFormValues] = useState<LoginForm>({
        Username: "",
        Password: ""
    });

    const router = useRouter();

    async function handleSubmit(event: any) {
        event.preventDefault();
        setErrorMessages([]);

        setFormValues(prev => ({
            Username: event.target[0].value,
            Password: event.target[1].value
        }));

        let response: any = await fetch("https://localhost:7034/api/User/login", {
            body: JSON.stringify(formValues), method: "POST", headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());

        if (response.token && errorMessages.length === 0) {
            setUser({
                token: response["token"],
                username: formValues.Username,
            });

            localStorage.setItem("auth-token", response["token"]);
            router.push("/");
        }
        else if (response.errors) {
            Object.values(response["errors"]).forEach(err => {
                setErrorMessages(prev => [err, ...prev] as string[]);
            });
        }
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
            {
                errorMessages.map(err => {
                    console.log(err);
                    return <Typography color="red">{err}</Typography>;
                })
            }

            <Button
                type="submit"
                variant="contained"
            >Login</Button>
        </Stack>
    );
}
export default Login;