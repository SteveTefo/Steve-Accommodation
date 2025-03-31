// script1.js

// Handle form submissions and validation
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const availabilityDiv = document.getElementById('availability');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Validate form data
        const formData = new FormData(bookingForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const roomType = formData.get('room-type');

        if (name && email && roomType) {
            // Send form data to server-side script for processing
            fetch('/submit-booking', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                // Handle server response
                if (data.success) {
                    alert('Booking successful!');
                    bookingForm.reset();
                } else {
                    alert('Booking failed. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        } else {
            alert('Please fill in all the fields.');
        }
    });

    // Implement dynamic features like room availability and pricing
    const roomTypeSelect = document.getElementById('room-type');
    roomTypeSelect.addEventListener('change', () => {
        const roomType = roomTypeSelect.value;

        // Use AJAX to fetch data from server-side scripts
        fetch(/check-availability?roomType=${roomType})
            .then(response => response.json())
            .then(data => {
                // Update availability information
                if (data.available) {
                    availabilityDiv.innerHTML = <p>${roomType} rooms are available.</p>;
                } else {
                    availabilityDiv.innerHTML = <p>Sorry, no ${roomType} rooms available.</p>;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                availabilityDiv.innerHTML = '<p>Error checking availability.</p>';
            });
    });
});