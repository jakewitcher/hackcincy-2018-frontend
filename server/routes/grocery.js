// Attach grocery routes to the main application
module.exports = (app) => {

  // Get the groceries needed by the shelter
  app.get('/groceries/shelter/:shelter_id', groceriesNeededByShelter);

  function groceriesNeededByShelter(req, res) {

  }

  // Cart management

  // View cart
  app.get('/cart', viewCart);

  function viewCart(req, res) {

  }

  // Add to cart
  app.post('/cart/:item_id', addToCart);

  function addToCart(req, res) {
    
  }

  // Remove from cart
  app.delete('/cart/:item_id', removeFromCart);

  function removeFromCart(req, res) {
    
  }

  // Checkout
  app.post('/checkout', checkout);

  function checkout(req, res) {
    
  }


  return app;
};