import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import AccountProvider from '../stores/AccountContext';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {

    return <AccountProvider>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar
                    component="div">
                    <Typography>
                        <Link href="/">DontBreakTheChain</Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
        <Container>
            <Component {...pageProps} />
        </Container>
    </AccountProvider>
}

export default MyApp
