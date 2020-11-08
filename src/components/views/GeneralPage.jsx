import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from "@material-ui/core/styles"

import GeneralHeader from "../content/GeneralHeader"
import GeneralContent from "../content/GeneralContent"
import {Typography} from "@material-ui/core"
import Link from "@material-ui/core/Link"
import {Link as RouterLink} from "react-router-dom"

// MUI styles
const useStyles = makeStyles(() => ({
    header: {
        marginTop: 30
    },
    link: {
        color: 'cyan'
    }
}))

const ProductPage = (props) => {
    const classes = useStyles()

    return (
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} >
                <Typography variant='h4' component='p' align='center'>
                    <Link component={RouterLink} to='/1' color='inherit' className={classes.link}>
                        Link to example of farm view (Demo only)
                    </Link>
                </Typography>
                <Typography variant='body1' align='center' className={classes.paragraph}>
                    Click above link to view example page to which customer is forwarded from the AR
                </Typography>
            </Grid>

            <Grid item xs={12} className={classes.header}>
                <GeneralHeader />
            </Grid>

            <Grid item xs={12} >
                <GeneralContent />
            </Grid>
        </Grid>
    )
}

export default ProductPage