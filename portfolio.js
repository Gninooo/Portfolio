document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
            });
        });
    });

    const themeToggle = document.querySelector('.theme-toggle');
        themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
            themeToggle.textContent = '🌞';
    }

    const form = document.getElementById('contact-form');
        form.addEventListener('submit', function(e) {
        e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
    return;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        alert('Please enter a valid email address.');
    return;
    }

    alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });