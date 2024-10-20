document.addEventListener('DOMContentLoaded', function() {
  const cart = [];
  const history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

  // Load previous purchase history
  updateHistory();

  // Add product to the cart
  window.addToCart = function(button) {
      const productDiv = button.parentElement;
      const productName = productDiv.dataset.name;
      const productPrice = parseFloat(productDiv.dataset.price);

      const product = { name: productName, price: productPrice };
      cart.push(product);
      updateCart();
  };

  // Update the cart display
  function updateCart() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';

      cart.forEach((item, index) => {
          const li = document.createElement('li');
          li.textContent = `${item.name} - ${item.price} NOK`;
          cartItems.appendChild(li);
      });
  }

  // Checkout and store purchase history
  window.checkout = function() {
      if (cart.length > 0) {
          history.push(...cart);
          localStorage.setItem('purchaseHistory', JSON.stringify(history));

          alert('Purchase successful!');
          cart.length = 0; // Clear cart after purchase
          updateCart();
          updateHistory();
      } else {
          alert('Your cart is empty.');
      }
  };

  // Update the purchase history display
  function updateHistory() {
      const historyItems = document.getElementById('history-items');
      historyItems.innerHTML = '';

      history.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.name} - ${item.price} NOK`;
          historyItems.appendChild(li);
      });
  }
});

// Initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
      const productName = button.parentElement.dataset.name;
      const productPrice = button.parentElement.dataset.price;

      // Add product to cart
      cart.push({ name: productName, price: productPrice });
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${productName} has been added to your cart`);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsDiv = document.querySelector('.cart-items');

  // Display cart items
  cartItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.textContent = `${item.name}: ${item.price}kr`;
      cartItemsDiv.appendChild(itemDiv);
  });
})
