import React from 'react'
import { Typography } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


// MUI styles
const useStyles = makeStyles(() => ({
    title: {
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        height: 150,
    }
}))

const GeneralHeader = (props) => {
    const {
    } = props
    const classes = useStyles()


    return (
        <>
            <div className={classes.logoContainer}>
                <img src='./HKScan_logo.png' className={classes.logo} />
            </div>
            <Typography variant='h5' align='center' className={classes.title}>
                Sustainable products from Finland for you!
            </Typography>
        </>
    )
}

export default GeneralHeader