import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles"

import junctionData from '../../data/data.json'

import BarChart from './BarChart'
import {Typography} from "@material-ui/core"


// MUI styles
const useStyles = makeStyles(() => ({
    barChart: {
        // height: 200,
        // marginTop: 50
    }
}))

const ProductChainChart = (props) => {
    const {
        id
    } = props
    const classes = useStyles()
    console.log(junctionData)

    const farmData = junctionData.find((farm) => (farm.id === id))
    const farmType = farmData.water.productionType.toLowerCase()
    const farmCO2 = farmData.carbonFootprint[farmType]

    console.log(farmData)
    console.log(farmCO2)

    const CO2keys = [
        "wheatOwnProduction",
        "wheatPurchased",
        "industrialFeed",
        "manureSystem",
        "energy",
        "other"
    ]
    const CO2chartData = [
        {
            'type': 'CO2',
            "wheatOwnProduction": 2,
            "wheatOwnProductionColor": "hsl(195, 70%, 50%)",
            "wheatPurchased": 5,
            "wheatPurchasedColor": "hsl(176, 70%, 50%)",
            "industrialFeed": 6,
            "industrialFeedColor": "hsl(270, 70%, 50%)",
            "manureSystem": 10,
            "manureSystemColor": "hsl(330, 70%, 50%)",
            "energy": 12,
            "energyColor": "hsl(16, 70%, 50%)",
            "other": 1,
            "otherColor": "hsl(157, 70%, 50%)",
        }
    ]
    const WaterKeys = [
        "drinkingWater",
        "washWaterEtc",
    ]
    const WaterData = [
        {
            'type': 'Water',
            "drinkingWater": 2,
            "drinkingWaterColor": "hsl(195, 70%, 50%)",
            "washWaterEtc": 5,
            "washWaterEtcColor": "hsl(176, 70%, 50%)",
        }
    ]

    return (
        <Grid container className={classes.chartContainer} >
            <Grid item xs={12} className={classes.barChart}>
                <Typography variant='h5'  align='center'>
                    Carbon footprint of this product: <br />
                </Typography>
                <Typography variant='h3'  align='center'>
                    {farmCO2.co2ePerKgMeat} kg of CO2
                </Typography>
                <Typography variant='body1'  align='center'>
                    (per one kg of meat produced)
                </Typography>
                <Typography variant='body1'  align='center'>
                    You can click on descriptions to see more details how different parts of production chain compare to other farms.
                </Typography>
                <BarChart data={CO2chartData} keys={CO2keys}/>
            </Grid>
            <Grid item xs={12} className={classes.barChart}>
                <Typography variant='h5'  align='center'>
                    Water used to produce this product
                </Typography>
                <Typography variant='body1'  align='center'>
                    You can click on descriptions to see more details how different parts of water usage compare to other farms.
                </Typography>
                <BarChart data={WaterData} keys={WaterKeys}/>
            </Grid>
        </Grid>
    )
}

export default ProductChainChart