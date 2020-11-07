import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { makeStyles } from "@material-ui/core/styles"

// MUI styles
const useStyles = makeStyles(() => ({
    chartContainer: {
        maxHeight: 700
    },
}))

const ProductChainChart = (props) => {
    const {
        id
    } = props
    const classes = useStyles()

    const data = [
        {
            "country": "AD",
            "hot dog": 0,
            "hot dogColor": "hsl(195, 70%, 50%)",
            "burger": 177,
            "burgerColor": "hsl(176, 70%, 50%)",
            "sandwich": 187,
            "sandwichColor": "hsl(270, 70%, 50%)",
            "kebab": 86,
            "kebabColor": "hsl(330, 70%, 50%)",
            "fries": 32,
            "friesColor": "hsl(16, 70%, 50%)",
            "donut": 170,
            "donutColor": "hsl(157, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 35,
            "hot dogColor": "hsl(153, 70%, 50%)",
            "burger": 190,
            "burgerColor": "hsl(180, 70%, 50%)",
            "sandwich": 52,
            "sandwichColor": "hsl(79, 70%, 50%)",
            "kebab": 20,
            "kebabColor": "hsl(258, 70%, 50%)",
            "fries": 80,
            "friesColor": "hsl(323, 70%, 50%)",
            "donut": 109,
            "donutColor": "hsl(67, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 58,
            "hot dogColor": "hsl(155, 70%, 50%)",
            "burger": 137,
            "burgerColor": "hsl(120, 70%, 50%)",
            "sandwich": 33,
            "sandwichColor": "hsl(174, 70%, 50%)",
            "kebab": 177,
            "kebabColor": "hsl(199, 70%, 50%)",
            "fries": 7,
            "friesColor": "hsl(2, 70%, 50%)",
            "donut": 110,
            "donutColor": "hsl(2, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 84,
            "hot dogColor": "hsl(34, 70%, 50%)",
            "burger": 62,
            "burgerColor": "hsl(201, 70%, 50%)",
            "sandwich": 151,
            "sandwichColor": "hsl(171, 70%, 50%)",
            "kebab": 50,
            "kebabColor": "hsl(226, 70%, 50%)",
            "fries": 199,
            "friesColor": "hsl(315, 70%, 50%)",
            "donut": 11,
            "donutColor": "hsl(331, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 65,
            "hot dogColor": "hsl(144, 70%, 50%)",
            "burger": 74,
            "burgerColor": "hsl(270, 70%, 50%)",
            "sandwich": 61,
            "sandwichColor": "hsl(43, 70%, 50%)",
            "kebab": 72,
            "kebabColor": "hsl(33, 70%, 50%)",
            "fries": 47,
            "friesColor": "hsl(205, 70%, 50%)",
            "donut": 163,
            "donutColor": "hsl(192, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 16,
            "hot dogColor": "hsl(128, 70%, 50%)",
            "burger": 166,
            "burgerColor": "hsl(148, 70%, 50%)",
            "sandwich": 80,
            "sandwichColor": "hsl(75, 70%, 50%)",
            "kebab": 163,
            "kebabColor": "hsl(249, 70%, 50%)",
            "fries": 89,
            "friesColor": "hsl(239, 70%, 50%)",
            "donut": 76,
            "donutColor": "hsl(75, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 36,
            "hot dogColor": "hsl(283, 70%, 50%)",
            "burger": 131,
            "burgerColor": "hsl(242, 70%, 50%)",
            "sandwich": 31,
            "sandwichColor": "hsl(355, 70%, 50%)",
            "kebab": 61,
            "kebabColor": "hsl(289, 70%, 50%)",
            "fries": 93,
            "friesColor": "hsl(260, 70%, 50%)",
            "donut": 30,
            "donutColor": "hsl(197, 70%, 50%)"
        }
    ]

    // make sure parent container have a defined height when using
    // responsive component, otherwise height will be 0 and
    // no chart will be rendered.
    // website examples showcase many properties,
    // you'll often use just a few of them.
    const MyResponsiveBar = ({ data /* see data tab */ }) => (
        <ResponsiveBar
            data={data}
            keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            layout="horizontal"
            valueScale={{ type: 'linear' }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    )

    return (
        <div className={classes.chartContainer}>
            { MyResponsiveBar(data) }
        </div>
    )
}

export default ProductChainChart