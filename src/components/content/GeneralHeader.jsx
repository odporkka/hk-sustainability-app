import React from 'react'
import { Typography } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


// MUI styles
const useStyles = makeStyles(() => ({
    header: {
        marginTop: 30
    },
}))

const GeneralHeader = (props) => {
    const {
    } = props
    const classes = useStyles()


    return (
        <Typography variant='h4' className={classes.header}>
            HKScan provides sustainable products for you!
        </Typography>
    )
}

export default GeneralHeader