
// Appointment form submission
const appointmentForm = document.querySelector('.appointment-form');

appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent actual form submission
    alert('Booking received!'); // show alert

    // Reset the form fields
    appointmentForm.reset();
});

// Navbar toggle
const openBtn= document.getElementById('menu-open-button');
const closeBtn= document.getElementById('menu-close-button');
const navMenu= document.getElementById('nav-menu');

openBtn.addEventListener('click', () => {
    navMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
});