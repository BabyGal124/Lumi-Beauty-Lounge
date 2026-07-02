emailjs.init('mlv6cdjgYIg74hhof');

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    btnText.textContent = 'Sending...';
    btn.disabled = true;

    const hour = document.getElementById('timeHour').value;
    const min = document.getElementById('timeMin').value.padStart(2, '0');
    const ampm = document.getElementById('timeAmPm').value;
    const timeString = `${hour}:${min} ${ampm}`;

    const templateParams = {
        firstName:  document.getElementById('firstName').value,
        lastName:   document.getElementById('lastName').value,
        email:      document.getElementById('email').value,
        whatsapp:   document.getElementById('whatsapp').value,
        service:    document.getElementById('service').value,
        date:       document.getElementById('date').value,
        time:       timeString,
        message:    document.getElementById('message').value,
    };

    emailjs.send('service_l3oqpiy', 'template_ik18e0t', templateParams)
        .then(() => {
            document.getElementById('bookingForm').style.display = 'none';
            document.getElementById('successMsg').style.display = 'flex';
        })
        .catch(() => {
            btnText.textContent = 'Failed. Try again.';
            btn.disabled = false;
        });
});
