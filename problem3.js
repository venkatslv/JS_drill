let anotherDataSet = require ('./data')


function countryWithHighestPopulation(data) {
    if (Array.isArray(data) && data.length > 0) {
        let countryWithHighestPopulation = data.reduce((acc, current) => (acc.population > current.population) ? acc : current);
        return countryWithHighestPopulation.country;;
    }
}

module.exports=countryWithHighestPopulation;
