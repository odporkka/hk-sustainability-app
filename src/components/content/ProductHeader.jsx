import React from 'react'
import {Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


// MUI styles
const useStyles = makeStyles(() => ({
    title: {
        marginTop: 60
    }
}))

const ProductHeader = (props) => {
    const {
        id
    } = props
    const classes = useStyles()

    return (
        <Typography variant='h3' align='center' className={classes.title}>
            This product is produced by Esimerkki Tila with love and care!
        </Typography>
    )
}

export default ProductHeader