import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from "@material-ui/core/styles"

import GeneralHeader from "../content/GeneralHeader"
import GeneralContent from "../content/GeneralContent"

// MUI styles
const useStyles = makeStyles(() => ({
    header: {
        marginTop: 30
    }
}))

const ProductPage = (props) => {
    const classes = useStyles()

    return (
        <Grid container item xs={12} spacing={2}>
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