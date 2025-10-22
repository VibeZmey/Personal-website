document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    name.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    message.classList.remove('is-invalid');

    let isValid = true;

    if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    }

    if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
    }

    if (isValid) {
        alert('Спасибо за ваше сообщение!');
        this.reset();
    }
});