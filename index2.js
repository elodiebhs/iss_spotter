const { nextISSTimesForMyLocation } = require('./iss_promised');




fetchMyIP()
  .then(fetchCoordsByIP)
//we should now add a reference to the fetchCoordsByIP function to our promise "chain", using .then(), immediately after the call to fetchMyIp.


  .then(fetchISSFlyOverTimes)

  .then(body => console.log(body));
  // Require and call the function fetchMyIP in this file. Since this function returns a promise, call .then on its return value. This then call should take in a callback which accepts the response body and, for now, prints it to the screen.


  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })

  //Since a promise is returned by nextISSTimesForMyLocation we can attach as many callbacks to it as we'd like. In this case, an error handling callback needs to be added,
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });