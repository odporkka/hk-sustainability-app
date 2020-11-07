export default class MathUtils {
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