import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { RegisterForm } from "../../interfaces/AccountForm";
import { useRouter } from "next/router";
import { useAccount } from "../../stores/AccountContext";

const Register = (props: any) => {
    const [user, setUser] = useAccount();
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [formValues, setFormValues] = useState<RegisterForm>({
        Email: "",
        Username: "",
        Password: ""
    });

    const router = useRouter();

    async function handleSubmit(event: any) {
        event.preventDefault();
        setErrorMessages([]);

        setFormValues(prev => ({
            Email: event.target[0].value,
            Username: event.target[1].value,
            Password: event.target[2].value
        }));


        let response: any = await fetch("https://localhost:7034/api/User/register", {
            body: JSON.stringify(formValues), method: "POST", headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());

        if (response.token && errorMessages.length === 0) {
            setUser({
                token: response["token"],
                username: formValues.Username,
            });

            localStorage.setItem("auth-token", response.data["token"]);
            router.push("/");
        }
        else if (response.errors) {
            Object.values(response["errors"]).forEach(err => {
                errorMessages.push(err as string);
                console.log(err);
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
            {
                errorMessages.map(error => {
                    return (
                        <Stack
                            flexDirection="column">
                            <Typography
                                color="red">
                                {error}
                            </Typography>
                        </Stack>
                    );
                })
            }
            <Button
                type="submit"
                variant="contained"
            >Register</Button>
        </Stack>
    );
}
export default Register;