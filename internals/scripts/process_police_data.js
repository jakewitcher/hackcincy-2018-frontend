const fetch = require('node-fetch');

// Pull down file because we don't want to commit this 200MB monster
const CRIMES_URL = "https://data.cincinnati-oh.gov/api/views/k59e-2pvf/rows.json?accessType=DOWNLOAD";

// Indexes are off by 7 from where the json says they are
const CRIME_TYPE_INDEX = 10 + 7;
const LATITUDE_INDEX = 27 + 7;
const LONGITUDE_INDEX = 26 + 7;
const DATE_INDEX = 22 + 7;

console.log("Fetching crime data");

fetch(CRIMES_URL)
  .then((res) => { return res.json() })
  .then((body) => {

    const POLICE_DATA = body;

    let thefts = POLICE_DATA.data.filter((record) => { // Only get thefts
      return record[CRIME_TYPE_INDEX] == 'THEFT';
    }).filter((record) => { // Only thefts for current year

      // Node uses millis offset from epoch, data uses seconds offset
      return (new Date(record[DATE_INDEX] * 1000).getFullYear() == 2018);

    });

    let theft_cooordinates = thefts.map((record) => {
      return {lat: record[LATITUDE_INDEX], lng: record[LONGITUDE_INDEX]};
    }).filter((coordinates) => {
      return coordinates.lat != null && coordinates.lng != null;
    });


    // Write to file because this is way too slow for client
    let writefile = __dirname+"/../../app/assets/fixtures/crime_coordinates.json";
    require('fs').writeFileSync(writefile, JSON.stringify(theft_cooordinates, undefined, 2));

});

