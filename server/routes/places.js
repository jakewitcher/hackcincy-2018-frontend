const fetch = require('node-fetch');

// Attach grocery routes to the main application
module.exports = app => {
  // Get the groceries needed by the shelter
  app.get('/places', fetchPlaces);
  console.log('Sanity:0'); //  eslint-disable-line no-console

  const shelterURL =
    'https://maps.googleapis.com/maps/api/place/textsearch/json?query=homeless+shelters+in+Cincinnati&key=AIzaSyBiIUmJDxLebygrTAvLN5OFgEtabxUctUg';

  function fetchPlaces(req, res) {
    console.log('Sanity:1'); //  eslint-disable-line no-console
    fetch(shelterURL)
      .then(response => {
        console.log("response: ", response); //  eslint-disable-line no-console
        return response.json();
      })
      .then(data => {
        console.log(data.results);
        res.send({
          success: true,
          payload: data.results,
        });
      });
  }

  return app;
};
