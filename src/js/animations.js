export function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        fadeObserver.observe(element);
    });

    // Observe slide-in elements
    document.querySelectorAll('.slide-in').forEach(element => {
        fadeObserver.observe(element);
    });

    // Add hover animations to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.product-image').style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.product-image').style.transform = 'scale(1)';
        });
    });
}