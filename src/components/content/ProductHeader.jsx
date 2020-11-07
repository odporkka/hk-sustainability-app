import React from 'react'
import {Typography} from "@material-ui/core"
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

const ProductHeader = (props) => {
    const {
        id
    } = props
    const classes = useStyles()

    return (
        <>
            <Typography variant='h5' align='center' className={classes.title}>
                This product is produced by
            </Typography>
            <div className={classes.logoContainer}>
                <img src='./HKScan_logo.png' className={classes.logo} />
            </div>
            <Typography variant='h2' align='center' className={classes.title}>
                Esimerkki Tila {1}
            </Typography>
            <Typography variant='h5' align='center' className={classes.title}>
                with love and care!
            </Typography>
        </>

    )
}

export default ProductHeader