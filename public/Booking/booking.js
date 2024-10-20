// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Months and days
const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Get elements
const calendarTitle = document.querySelector(".calendar h2");
const calendarBody = document.querySelector(".calendar table tbody");
const currentDate = new Date();

// Current state
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let bookings = {};

// Update the calendar view
function updateCalendar() {
    // Set calendar title
    calendarTitle.innerText = `${months[currentMonth]} ${currentYear}`;

    // Clear previous calendar days
    calendarBody.innerHTML = "";

    // Determine the number of days in the current month
    let daysThisMonth = daysInMonth[currentMonth];

    // Check for leap year in February
    if (currentMonth === 1 && ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0)) {
        daysThisMonth = 29; // Leap year adjustment
    }

    // Create a date object set to the first of the current month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    // Create rows and cells for the calendar
    let row = document.createElement("tr");
    for (let i = 0; i < firstDay; i++) {
        let emptyCell = document.createElement("td");
        row.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysThisMonth; day++) {
        if (row.children.length === 7) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }

        const cell = document.createElement("td");
        cell.innerText = day;

        // Add click event for booking a date
        cell.addEventListener("click", () => handleBooking(day));

        // Highlight booked dates
        const bookingKey = `${currentYear}-${currentMonth + 1}-${day}`;
        if (bookings[bookingKey]) {
            cell.classList.add("booked");
        }

        row.appendChild(cell);
    }

    calendarBody.appendChild(row);
}

// Handle booking for the selected date
function handleBooking(day) {
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn !== 'true') {
        alert("You must be logged in to make a booking.");
        return;
    }

    const bookingKey = `${currentYear}-${currentMonth + 1}-${day}`;

    // Toggle booking
    if (bookings[bookingKey]) {
        delete bookings[bookingKey];
        alert(`Booking removed for ${bookingKey}`);
    } else {
        bookings[bookingKey] = true;
        alert(`Booking made for ${bookingKey}`);
    }

    updateCalendar(); // Re-render calendar to show updated bookings
}

// Go to the next month
function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
}

// Go to the previous month
function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
}

// Initialize calendar on page load
document.addEventListener("DOMContentLoaded", () => {
    updateCalendar();

    // Add navigation buttons for changing months
    const prevButton = document.createElement("button");
    prevButton.innerText = "Previous Month";
    prevButton.addEventListener("click", previousMonth);

    const nextButton = document.createElement("button");
    nextButton.innerText = "Next Month";
    nextButton.addEventListener("click", nextMonth);

    document.querySelector(".calendar").appendChild(prevButton);
    document.querySelector(".calendar").appendChild(nextButton);
});
