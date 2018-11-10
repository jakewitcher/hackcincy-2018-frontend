// Attach grocery routes to the main application
module.exports = app => {
  // Get the groceries needed by the shelter
  app.get('/places', fetchPlaces);

  const shelterURL =
    'https://maps.googleapis.com/maps/api/place/textsearch/json?query=homeless+shelters+in+Cincinnati&key=AIzaSyBiIUmJDxLebygrTAvLN5OFgEtabxUctUg';

  function fetchPlaces() {
    fetch(shelterURL)
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
      });
  }

  return app;
};
