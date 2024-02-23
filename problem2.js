
function averagePopulation(data) {
    if(Array.isArray(data) && data.length > 0) {
        const totalPopulation = data.reduce((acc, curr) => acc + curr.population, 0);
        return totalPopulation / data.length;
    }
    return 0; 
}

module.exports=averagePopulation;

