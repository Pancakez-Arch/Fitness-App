document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
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
      localStorage.setItem('cart', JSON.stringify(cart));
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
            alert('Cart is empty!');
        }
        // Define the cart array and the history array
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
        
        // Define the updateCart() and updateHistory() functions
        function updateCart() {
            // ...
        }
        
        function updateHistory() {
            // ...
        }
        
        // Define the checkout function
        function checkout() {
            if (cart.length > 0) {
                history.push(...cart);
                localStorage.setItem('purchaseHistory', JSON.stringify(history));
        
                alert('Purchase successful!');
                cart.length = 0; // Clear cart after purchase
                updateCart();
                updateHistory();
        
                // Redirect to payment page
                const cartData = JSON.stringify(cart); // Convert cart array to JSON string
                window.location.href = `payment.html?cart=${cartData}`;
            } else {
                alert('Your cart is empty.');
            }
        }
        
        // Add event listener to checkout button
        document.getElementById('checkout-button').addEventListener('click', checkout);

    };
  })