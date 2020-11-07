export default class MathUtils {
    // Example
    /*
    import MathUtils from '../../utils/MathUtils'

    const productionTypes = new Set(data.map(farm => farm.water.productionType));
    for (const type of productionTypes) {
        const avg_waterUsage = MathUtils.avgWaterUsage(data, type);
        const avg_PercentageWaterForDrinking = MathUtils.avgWaterUsageForDrinking(data, type);
        const avg_numberOfanimals = MathUtils.avgNumberOfAnimals(data, type);
        const avg_co2 = MathUtils.avgCO2(data, type);
        const avg_CO2PerKg = MathUtils.avgCO2PerKg(data, type);
        const avg_CO2PerKg = MathUtils.farmCount(data, type);


        console.log(`${type}: ${avg_waterUsage} m3/y`);
        console.log(`${type}: ${avg_PercentageWaterForDrinking} %`);
        console.log(`${type}: ${avg_numberOfanimals}`);
        console.log(`${type}: ${avg_co2}`);
        console.log(`${type}: ${avg_CO2PerKg}`);
        console.log(`${type}: Farms - ${avg_CO2PerKg}`)
        console.log("-----------------------");
    */

    static avgWaterUsage (data, type) {
        const farms = data.filter(farm => farm.water.productionType === type);
        const sum = farms.reduce((sum, farm) => sum + farm.water.waterUsage, 0);
        const avg = (sum / farms.length) || 0;
        return avg.toFixed(2);
    }

    static avgWaterUsageForDrinking (data, type) {
        const farms = data.filter(farm => farm.water.productionType === type);
        const sum = farms.reduce((sum, farm) => sum + (farm.water.drinkingWater / farm.water.waterUsage), 0);
        const avg = (sum / farms.length) || 0;
        return (avg * 100).toFixed(2);
    }

    static avgNumberOfAnimals (data, type) {
        const farms = data.filter(farm => farm.water.productionType === type);
        const sum = farms.reduce((sum, farm) => sum + farm.water.numberOfAnimals, 0);
        const avg = (sum / farms.length) || 0;
        return avg.toFixed(2);
    }

    static avgCO2(data, type) {
        const farms = data.filter(farm => farm.water.productionType === type);
        const sum = farms.reduce((sum, farm) => sum + farm.carbonFootprint[type.toLowerCase()].total, 0);
        const avg = (sum / farms.length) || 0;
        return avg.toFixed(2);
    }

    static avgCO2PerKg(data, type) {
        const farms = data.filter(farm => farm.water.productionType === type);
        const sum = farms.reduce((sum, farm) => sum + farm.carbonFootprint[type.toLowerCase()].co2ePerKgMeat, 0);
        const avg = (sum / farms.length) || 0;
        return avg.toFixed(2);
    }

    static farmCount(data, type) {
        return data.filter(farm => farm.water.productionType === type).length;
    }
}