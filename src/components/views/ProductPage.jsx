import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import ProductHeader from "../content/ProductHeader"
import ProductChainChart from "../content/ProductChainChart"
import {makeStyles} from "@material-ui/core/styles"
import {Typography} from "@material-ui/core"


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
    const id = parseInt(props.match.params.id)
    const classes = useStyles()

    useEffect(() => {
        console.log('Showing page for', id)
    }, [id])

    return (
        <Grid container item xs={12} spacing={2} justify='center'>
            <Grid item xs={12} className={classes.header}>
                <ProductHeader id={id} />
            </Grid>

            <Grid item xs={12} >
                <ProductChainChart id={id} />
            </Grid>

            <Grid item xs={12} >
                <Typography variant='h3' component='p' align='center'>
                    <Link component={RouterLink} to='/' color='inherit' className={classes.link}>
                        Learn more about HKScan
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ProductPage