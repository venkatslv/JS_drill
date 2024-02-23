
function countrynames(data) {
    if(Array.isArray(data)){
    return data.map(function(obj) {
        return obj.city;
    });
}
}

module.exports=countrynames;