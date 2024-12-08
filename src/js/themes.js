export const themes = {
    default: {
        '--primary-orange': '#ff6b00',
        '--secondary-orange': '#ff8534',
        '--black': '#1a1a1a',
        '--gray': '#333333',
        '--light-gray': '#f5f5f5',
        '--background': '#ffffff'
    },
    dark: {
        '--primary-orange': '#ff8534',
        '--secondary-orange': '#ff6b00',
        '--black': '#000000',
        '--gray': '#222222',
        '--light-gray': '#333333',
        '--background': '#1a1a1a'
    },
    light: {
        '--primary-orange': '#ff6b00',
        '--secondary-orange': '#ff8534',
        '--black': '#333333',
        '--gray': '#666666',
        '--light-gray': '#ffffff',
        '--background': '#f5f5f5'
    },
    contrast: {
        '--primary-orange': '#ffaa00',
        '--secondary-orange': '#ffc107',
        '--black': '#000000',
        '--gray': '#444444',
        '--light-gray': '#ffffff',
        '--background': '#eeeeee'
    }
};

export function setTheme(themeName) {
    const theme = themes[themeName];
    Object.entries(theme).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });
    localStorage.setItem('selectedTheme', themeName);
}

export function initializeTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    setTheme(savedTheme);
}