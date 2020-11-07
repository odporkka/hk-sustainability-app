import React from 'react'
import Grid from '@material-ui/core/Grid'

import junctionData from '../../data/data.json'
import GeneralHeader from "../content/GeneralHeader"
import {makeStyles} from "@material-ui/core/styles"

// MUI styles
const useStyles = makeStyles(() => ({
}))


const ProductPage = (props) => {
    const classes = useStyles()

    console.log(junctionData)

    return (
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} >
                <GeneralHeader />
            </Grid>

            <Grid item xs={12} >
                <img src='./sausage.png' />
            </Grid>
        </Grid>
    )
}

export default ProductPage