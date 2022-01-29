import { Stack, ListItem } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useAccount } from '../stores/AccountContext'

const Home: NextPage = () => {

  const [user, setUser] = useAccount();

  return (
    <div>
      <Head>
        <title>DontBreakTheChain</title>
      </Head>
      <h1>Welcome Home page of Dont Break the Chain Site!</h1>

      <div>
        <h2>Register to Move!</h2>

        {!user.isLoggedIn &&
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
          user.isLoggedIn &&
          <Stack spacing={2}>
            <ListItem>
              Welcome to page {user.Username}
            </ListItem>
            <ListItem>
              <Link href="/chain/createChain">Create Chain</Link>
            </ListItem>
            <ListItem>
              <Link href="/account/register">Logout</Link>
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
