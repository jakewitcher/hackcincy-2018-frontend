const fetch = require('node-fetch');

// Attach grocery routes to the main application
module.exports = app => {
  // Get the groceries needed by the shelter
  app.get('/places', fetchPlaces);

  const shelterURL =
    'https://maps.googleapis.com/maps/api/place/textsearch/json?query=homeless+shelters+in+Cincinnati&key=AIzaSyBiIUmJDxLebygrTAvLN5OFgEtabxUctUg';

  function fetchPlaces(req, res) {
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
