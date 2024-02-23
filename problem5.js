
function Bustransportfacility(data) {
  return data.filter(entry => entry.publicTransport.includes("Bus")).map(obj=> obj.city);
};

module.exports=Bustransportfacility;