export function initializeAbout() {
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    aboutSection.className = 'about-section';
    
    aboutSection.innerHTML = `
        <div class="about-content">
            <h2 class="section-title">About SH/A</h2>
            <div class="about-grid">
                <div class="about-card fade-in">
                    <img src="/src/assets/quality.jpg" alt="Quality" class="about-image">
                    <h3>Premium Quality</h3>
                    <p>We source only the finest materials for our products, ensuring lasting quality and satisfaction.</p>
                </div>
                <div class="about-card fade-in">
                    <img src="/src/assets/design.jpg" alt="Design" class="about-image">
                    <h3>Unique Design</h3>
                    <p>Each piece is carefully designed to blend style with functionality, creating timeless fashion statements.</p>
                </div>
                <div class="about-card fade-in">
                    <img src="/src/assets/sustainability.jpg" alt="Sustainability" class="about-image">
                    <h3>Sustainability</h3>
                    <p>Our commitment to sustainable fashion drives every decision we make, from sourcing to packaging.</p>
                </div>
            </div>
            <div class="about-story slide-in">
                <h3>Our Story</h3>
                <p>Founded in 2023, SH/A has been at the forefront of fashion innovation. We believe in creating pieces that not only look good but feel good too. Our journey began with a simple idea: to provide exceptional quality clothing that stands the test of time.</p>
            </div>
        </div>
    `;
    
    document.querySelector('main').appendChild(aboutSection);
}