import React from 'react'
import junctionData from '../../data/data.json'
import { ResponsiveBar } from '@nivo/bar'

const IndexScore = (props) => {
    const {
        currentFarm,
    } = props

    const theme = {
        fontSize: 14,
        textColor: "#ffffff",
        axis: {
            fontSize: "100px",
            tickColor: "#eee",
            ticks: {
                line: {
                    stroke: "#555555"
                },
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

    const bestForstIndex = () => {
        const indexList = []
        // const top3 = [{id: currentFarm.id, index: currentFarm.index}]
        const top3 = [{id: currentFarm.id, index: currentFarm.index}]
        for (const farm of junctionData) {
            if (farm.id !== currentFarm.id) {
                indexList.push(farm)
            }
        }
        indexList.sort(function(obj1, obj2) {
            return obj2.index - obj1.index;
        });

        const first = indexList[0]
        top3.push({id: first.id, index: first.index})
        if (indexList.length > 1) {
            const last = indexList[indexList.length - 1]
            top3.push({id: last.id, index: last.index})
        }

        top3.sort(function(obj1, obj2) {
            return obj2.index - obj1.index;
        });

        return top3.reverse()
    }

    const top3 = bestForstIndex()
    return (
        <ResponsiveBar
        data={top3}
        keys={["index"]}
        isInteractive={false}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        theme={theme}
        indexBy='id'
        padding={0.3}
        minValue={0}
        maxValue={100}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'WQ',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Farm',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
    )
}

export default IndexScore