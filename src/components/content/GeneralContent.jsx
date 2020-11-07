import React from 'react'
import { Typography } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"


// MUI styles
const useStyles = makeStyles(() => ({
    generalInfoContainer: {
        paddingTop: 20
    },
    title: {
        marginTop: 30,
        paddingBottom: 10,
    },
    paragraph: {
        paddingBottom: 10
    },
    contentDiv: {
        width: '60%'
    },
    image: {
        width: '100%'
    }
}))

const GeneralContent = (props) => {
    const {
    } = props
    const classes = useStyles()


    return (
        <Grid container className={classes.generalInfoContainer} >
            <Grid container item xs={12} spacing={4}>
                <Grid item xs={8}>
                    <Typography variant='h5' className={classes.title} >
                        Nordic chicken
                    </Typography>
                    <Typography variant='body1' className={classes.paragraph}>
                        HKScan plays a leading role as a promoter of animal welfare in Finland. The exceptional health status of finnish poultry is acknowledged by the World Organisation for Animal Health
                    </Typography>
                    <Typography variant='body1'className={classes.paragraph}>
                        HKScan has launched the Farm Born concept - which means that the chicks are hatched and reared at the same farm. There is no need to transport the newly hatched chicks and they can start their everyday life right away and get to know their new surroundings. This calm and pleasant life in their controlled and clean environment keeps the chicken stronger and healthier.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src='./chickens.jpg' className={classes.image}/>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={4}>
                <Grid item xs={4}>
                    <img src='./chickens2.jpg' className={classes.image}/>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h5' className={classes.title} >
                        Finnish Chicken is  100% antibiotics-free
                    </Typography>
                    <Typography variant='body1' className={classes.paragraph}>
                        Research shows that Finnish meat is a pure, safe choice. Finnish chickens reared for poultry production have not been given antibiotics since 2009.
                    </Typography>
                    <Typography variant='body1'className={classes.paragraph}>
                        The unnecessary use of antibiotics in the treatment of people and animals is harmful and possibly dangerous. Bacteria become resistant to antibiotics, causing drugs to become less effective. According to the World Health Organization, the spread of superbugs is a major health threat globally (OECD 2019).
                    </Typography>
                </Grid>

            </Grid>
        </Grid>

    )
}

export default GeneralContent