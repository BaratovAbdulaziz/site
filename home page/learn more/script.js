// Smooth Scroll for Anchor Links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: You can add more JavaScript functionality if needed, like interactive elements or form validation in the future.
