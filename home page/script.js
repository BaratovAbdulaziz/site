// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.nav .menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('menu-active');
  menuToggle.classList.toggle('rotate');  // Adding rotation effect to the menu button
});

// Smooth Scroll for Anchor Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Scroll-triggered Animations
const sections = document.querySelectorAll('.hero, .features, .footer');

function checkVisibility() {
  const viewportHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < viewportHeight * 0.8) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);

// Optional: Adding a class for scroll-triggered visibility
document.addEventListener('DOMContentLoaded', checkVisibility);

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/Hide Scroll to Top Button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Button Hover and Click Animations
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('btn-hover');
  });

  button.addEventListener('mouseout', () => {
    button.classList.remove('btn-hover');
  });

  button.addEventListener('click', (e) => {
    e.preventDefault();
    button.classList.add('btn-clicked');
    setTimeout(() => {
      button.classList.remove('btn-clicked');
    }, 300);
  });
});
