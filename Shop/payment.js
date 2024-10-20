document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.querySelector('.cart-items');

    // Display cart items
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name}: ${item.price}kr`;
        cartItemsDiv.appendChild(itemDiv);
    });

    // Handle payment form submission
    document.getElementById('payment-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const cardNumber = document.getElementById('card-number').value;

        // Basic validation for 16-digit card number
        if (cardNumber.length === 16 && !isNaN(cardNumber)) {
            // Show custom popup
            showPopup('Payment Successful');
            localStorage.removeItem('cart'); // Clear the cart after successful payment
        } else {
            showPopup('Invalid Card Number');
        }
    });
});

// Function to show a popup message
function showPopup(message) {
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;

    // Add popup to the body
    document.body.appendChild(popup);

    // Automatically remove the popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

