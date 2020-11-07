import React from 'react'
import { ResponsiveBar } from '@nivo/bar'


const BarChart = (props) => {
    const {
        data,
        keys
    } = props

    const theme = {
        textColor: "#ffffff",
        fontSize: 14,
        axis: {
            fontSize: "100px",
            tickColor: "#eee",
            ticks: {
                line: {
                    stroke: "#555555"
                },
                text: {
                    fontSize: 20,
                    fill: "#ffffff"
                }
            },
            legend: {
                text: {
                    fill: "#aaaaaa"
                }
            }
        },
        grid: {
            line: {
                stroke: "#555555"
            }
        }
    }


    return (
        <ResponsiveBar
            data={data}
            keys={keys}
            height='200'
            theme={theme}
            indexBy='type'
            maxValue='100'
            margin={{ top: 20, right: 20, bottom: 80, left: 20 }}
            padding={0.3}
            layout="horizontal"
            valueScale={{ type: 'linear' }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 20,
                    itemsSpacing: 100,
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
}

export default BarChart