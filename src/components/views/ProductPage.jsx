import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import ProductHeader from "../content/ProductHeader"
import ProductChainChart from "../content/ProductChainChart"


const ProductPage = (props) => {
    const id = parseInt(props.match.params.id)

    useEffect(() => {
        console.log('Showing page for', id)
    }, [id])

    return (
        <Grid container item xs={12} spacing={2}>

            <Grid item xs={12} >
                <ProductHeader id={id} />
            </Grid>

            <Grid item xs={12} >
                <ProductChainChart id={id} />
            </Grid>

        </Grid>
    )
}

export default ProductPage