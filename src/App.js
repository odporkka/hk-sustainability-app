import React from "react"
import Container from '@material-ui/core/Container'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Router from './Router'
import { theme } from './theme'

// MUI styles
const useStyles = makeStyles(() => ({
    // rootContainer: {
    //     display: 'flex',
    //     minHeight: '100vh',
    //     flexDirection: 'column'
    // },
    mainContainer: {
    },
    mainGrid: {
        flex: 1
    },
}))

function App() {
    const classes = useStyles()


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper>
                <Container className={classes.mainContainer}>
                    <Grid container className={classes.mainGrid} justify='center' spacing={4}>
                        <Router />
                    </Grid>
                </Container>
            </Paper>
        </ThemeProvider>
    )
}

export default App
