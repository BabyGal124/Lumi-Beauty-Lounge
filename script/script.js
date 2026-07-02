
// Appointment form submission
const appointmentForm = document.querySelector('.appointment-form');

appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent actual form submission
    alert('Booking received!'); // show alert

    // Reset the form fields
    appointmentForm.reset();
});