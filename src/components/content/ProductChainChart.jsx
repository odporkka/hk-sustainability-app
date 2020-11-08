import React, {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles"
import ComparatorPopup from './ComparatorPopup'
import ComparatorPopupHook from '../hooks/ComparatorPopupHook'
import Button from '@material-ui/core/Button';

import junctionData from '../../data/data.json'

import BarChart from './BarChart'
import {Typography} from "@material-ui/core"


// MUI styles
const useStyles = makeStyles(() => ({
    barChart: {
        // height: 200,
        marginTop: 50
    },
    WQ: {
        marginTop: 30
    },
    button: {
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    }
}))

const ProductChainChart = (props) => {
    const {isShowing, toggle, clickPosition, position} = ComparatorPopupHook();

    const {
        id
    } = props
    const classes = useStyles()

    const farmData = junctionData.find((farm) => (farm.id === id))
    const farmType = farmData.water.productionType.toLowerCase()
    const farmCO2 = farmData.carbonFootprint[farmType]
    const waterPerAnimal = ((farmData.water.waterUsage / farmData.water.numberOfAnimals) * 1000).toFixed(2)

    const clickHandler = (mouseEvent) => {
        clickPosition(mouseEvent)
        toggle();
    }

    const CO2keys = [
        "Own produced wheat",
        "Purchased wheat",
        "Industrial feed",
        "Manure system",
        "Energy",
        "Other"
    ]
    const CO2chartData = [
        {
            'type': 'CO2',
            "Own produced wheat": farmCO2.Co2percentage.wheatOwnProduction,
            "Purchased wheat": farmCO2.Co2percentage.wheatPurchased,
            "Industrial feed": farmCO2.Co2percentage.industrialFeed,
            "Manure system": farmCO2.Co2percentage.manureSystem,
            "Energy": farmCO2.Co2percentage.energy,
            "Other": farmCO2.Co2percentage.other,
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
            "washWaterEtc": 5,
        }
    ]

    return (
    <div>
        <Grid container className={classes.chartContainer} >
            <Grid item xs={12} className={classes.barChart}>
                <Typography variant='h5'  align='center'>
                    Carbon footprint of this product:
                </Typography>
                <Typography variant='h3'  align='center'>
                    {farmCO2.co2ePerKgMeat} kg of CO2
                </Typography>
                <Typography variant='body1'  align='center'>
                    (per one kg of meat produced)
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.WQ}>
                <Button className={classes.button} onClick={clickHandler}>
                <Typography variant='h5'  align='center'>
                    Welfare Quality:
                </Typography>
                <Typography variant='h3'  align='center'>
                    {farmData.index} / 100
                </Typography>
                 </Button>
                <Typography variant='body1'  align='center'>
                    (Click on score to view how this farm compares to other HKScan farms)
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.barChart}>
                <Typography variant='h5'  align='center'>
                    What contributes in this CO2 value?
                </Typography>
                {/*<Typography variant='body1'  align='center'>*/}
                {/*    You can click on descriptions to see more details how different parts of production chain compare to other farms.*/}
                {/*</Typography>*/}
                <BarChart data={CO2chartData} keys={CO2keys}/>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='h6'  align='center'>
                    This farm uses
                </Typography>
                <Typography variant='h4'  align='center'>
                    { waterPerAnimal } liters of water per animal
                </Typography>
                <Typography variant='body1'  align='center'>
                    (Includes drinking water and washing water)
                </Typography>
                {/*<BarChart data={WaterData} keys={WaterKeys}/>*/}
            </Grid>
        </Grid>
        <ComparatorPopup isShowing={isShowing} hide={toggle} position={position} farm={farmData} toggle={toggle}/>
        </div>
    )
}

export default ProductChainChart