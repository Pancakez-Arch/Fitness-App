document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

    // Load previous purchase history
    function updateHistory() {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';

        history.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} NOK`;
            historyList.appendChild(li);
        });
    }

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
    function checkout() {
        if (cart.length > 0) {
            history.push(...cart);
            localStorage.setItem('purchaseHistory', JSON.stringify(history));

            alert('Purchase successful!');
            cart.length = 0; // Clear cart after purchase
            updateCart();
            updateHistory();

            // Redirect to payment page
            window.location.href = 'payment.html';
        } else {
            alert('Cart is empty!');
        }
    }

    // Add event listener to checkout button
    document.getElementById('checkout-button').addEventListener('click', checkout);

    // Load previous purchase history
    updateHistory();
});