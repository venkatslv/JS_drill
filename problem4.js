
function attractions(data) {
  if(Array.isArray(data)){
  return data.map(function(obj) {
      return obj.attractions;
  });
}
}
module.exports=attractions;