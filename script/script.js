

// Appointment form submission
const appointmentForm = document.querySelector('.appointment-form');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent actual form submission
        alert('Booking received!'); // show alert

        // Reset the form fields
        appointmentForm.reset();
    });
}

// Navbar toggle
const openBtn = document.getElementById('menu-open-button');
const closeBtn = document.getElementById('menu-close-button');
const navMenu = document.getElementById('nav-menu');

if (openBtn && closeBtn && navMenu) {
    openBtn.addEventListener('click', () => {
        navMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });
}