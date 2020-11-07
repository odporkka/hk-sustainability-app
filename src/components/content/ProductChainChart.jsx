import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles"

import junctionData from '../../data/data.json'

import BarChart from './BarChart'


// MUI styles
const useStyles = makeStyles(() => ({
    barChart: {
        height: 200
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
        <Grid container className={classes.chartContainer} spacing={2}>
            <Grid item xs={12} className={classes.barChart}>
                <BarChart data={CO2chartData} keys={CO2keys}/>
            </Grid>
            <Grid item xs={12} className={classes.barChart}>
                <BarChart data={WaterData} keys={WaterKeys}/>
            </Grid>
        </Grid>
    )
}

export default ProductChainChart