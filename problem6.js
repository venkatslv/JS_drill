
function Fooditem(data) {
  let cities = data.filter(entry => entry.famousFood.includes("param")).map(obj => obj.city);
  if (cities.length === 0) {
    return "No data";
  } else {
    return cities;
  }
}

module.exports=Fooditem;