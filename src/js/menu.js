import { setTheme } from './themes.js';
import { setLanguage } from './languages.js';

export function initializeMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    menuContainer.innerHTML = `
        <button class="menu-trigger">⋮</button>
        <div class="menu-dropdown">
            <div class="menu-section">
                <h3>Theme</h3>
                <select id="themeSelect">
                    <option value="default">Default</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="contrast">High Contrast</option>
                </select>
            </div>
            <div class="menu-section">
                <h3>Language</h3>
                <select id="languageSelect">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>
            <div class="menu-section">
                <h3>Display</h3>
                <label class="switch">
                    <input type="checkbox" id="animationsToggle">
                    <span class="slider"></span>
                    Animations
                </label>
            </div>
        </div>
    `;

    document.querySelector('nav').appendChild(menuContainer);

    // Event Listeners
    const menuTrigger = menuContainer.querySelector('.menu-trigger');
    const menuDropdown = menuContainer.querySelector('.menu-dropdown');

    menuTrigger.addEventListener('click', () => {
        menuDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!menuContainer.contains(e.target)) {
            menuDropdown.classList.remove('show');
        }
    });

    // Theme Selection
    const themeSelect = document.getElementById('themeSelect');
    themeSelect.addEventListener('change', (e) => {
        setTheme(e.target.value);
    });

    // Language Selection
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Animations Toggle
    const animationsToggle = document.getElementById('animationsToggle');
    animationsToggle.checked = !localStorage.getItem('disableAnimations');
    animationsToggle.addEventListener('change', () => {
        document.body.classList.toggle('disable-animations', !animationsToggle.checked);
        localStorage.setItem('disableAnimations', !animationsToggle.checked);
    });
}