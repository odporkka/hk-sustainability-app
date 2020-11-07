import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

/**
 * Default theme to use across the site.
 * These values are merged to
 *
 * LOGO red: #f44336
 * LOGO white: #ffffff
 */
export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#62727b',
            main: '#37474f',
            dark: '#102027',
            contrastText: '#f8f7ed',
            contrastTextDarker: '#f8f7ed'
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        background: {
            paper: '#fff'
        },
        text: {
            primary: '#fff'
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: '#000',
                    backgroundImage: "url('viikin_tila.jpg')",
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }
            }
        },
        MuiPaper: {
            root: {
                // Default paper background, alfa 75%
                backgroundColor: 'rgba(55,71,79,.85)',

            }
        }
    }
})
