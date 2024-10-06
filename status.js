document.addEventListener('DOMContentLoaded', function () {
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
        // Create the "Logged In" status message
        const statusDiv = document.createElement('div');
        statusDiv.textContent = 'Logged in';
        statusDiv.style.position = 'fixed';
        statusDiv.style.top = '10px';
        statusDiv.style.right = '10px';
        statusDiv.style.backgroundColor = '#00ADEF';
        statusDiv.style.color = 'white';
        statusDiv.style.padding = '10px 20px';
        statusDiv.style.borderRadius = '5px';
        statusDiv.style.fontSize = '14px';
        statusDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

        // Add a logout button
        const logoutButton = document.createElement('button');
        logoutButton.textContent = 'Logout';
        logoutButton.style.marginLeft = '10px';
        logoutButton.style.backgroundColor = '#FF69B4';
        logoutButton.style.color = 'white';
        logoutButton.style.border = 'none';
        logoutButton.style.borderRadius = '5px';
        logoutButton.style.cursor = 'pointer';
        logoutButton.onclick = function () {
            // Clear the logged-in status and refresh the page
            localStorage.removeItem('loggedIn');
            window.location.reload();
        };

        statusDiv.appendChild(logoutButton);
        document.body.appendChild(statusDiv);
    }
});
