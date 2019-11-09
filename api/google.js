const axios = require("axios");
require("dotenv").config();

getDurationGap = (origins, destinations, departure_time) => {
  const time = Math.round((new Date()).getTime() / 1000);
  let hour = parseInt(departure_time.slice(0, 2),10);
  const min = parseInt(departure_time.slice(3, 5),10);
  if (min>20 && min<40) { hour += 0.5 } else if (min>40) { hour += 1 };
  const departureTime = (hour - 6)*3600 + time;
  const apiKey = process.env.GoogleApiKey;
  return axios.get("https://maps.googleapis.com/maps/api/distancematrix/json",{ 
    params:{
      units:"imperial",
      origins: origins,
      destinations:destinations,
      key: apiKey,
      departure_time: departureTime
    },
  }).then(res => {
    const duration = res.data.rows[0].elements[0].duration.value;
    const durationInTraffic = res.data.rows[0].elements[0].duration_in_traffic.value;
    let timeGap = Math.floor((durationInTraffic - duration)/60);
    if ((durationInTraffic - duration)%60 >= 20 && (durationInTraffic - duration)%60 <= 40) {
      timeGap += 0.5 } else if ((durationInTraffic - duration)%60 >= 40) { timeGap += 1 };
    return timeGap;
  }).catch(err => {console.log(err)});
};

module.exports = getDurationGap;