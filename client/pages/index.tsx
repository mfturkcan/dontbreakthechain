import { Stack, ListItem } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axiosInstance from '../config/axiosConfig'
import IUser from '../interfaces/IUser'
import { useAccount } from '../stores/AccountContext'


const Home: NextPage = () => {
    const [user, setUser] = useAccount();
    const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        const authFunc = async () => {
            let authToken = localStorage.getItem("auth-token");

            if (authToken) {
                let result: IUser | string = await axiosInstance.post("/User/user");
                if (result as IUser) {
                    setUser(result);
                    setLoggedIn(true);
                }
                else console.log("Remove auth token");
            }

            else {
                setLoggedIn(false);
                if (user.username) setUser({ username: "", token: "" });
            }
        }

        authFunc();
    }, []);

    return (
        <div>
            <Head>
                <title>DontBreakTheChain</title>
            </Head>
            <h1>Welcome Home page of Dont Break the Chain Site!</h1>

            <div>
                <h2>Register to Move!</h2>

                {loggedIn === false &&
                    <Stack spacing={2}>
                        <ListItem>
                            <Link href="/account/login">Login Page</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/account/register">Register Page</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/chain/createChain">Create Chain</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/account/testUser">Test user</Link>
                        </ListItem>
                    </Stack>
                }
                {
                    loggedIn === true &&
                    <Stack spacing={2}>
                        <ListItem>
                            Welcome to page {user.Username}
                        </ListItem>
                        <ListItem>
                            <Link href="/chain/createChain">Create Chain</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/account/logout">Logout</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/account/testUser">Test user</Link>
                        </ListItem>
                    </Stack>
                }
            </div>

        </div>
    )
}

export default Home
