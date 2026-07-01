(function() {
    let isDark = true;
    const themeToggle = document.getElementById('themeToggle');

    function setTheme(dark) {
        if (dark) {
            document.body.classList.remove('light-mode');
            document.body.style.background = '#0a0a0f';
            themeToggle.innerHTML = `
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
            `;
        } else {
            document.body.classList.add('light-mode');
            document.body.style.background = '#ffffff';
            themeToggle.innerHTML = `
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            `;
        }
        isDark = dark;
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            setTheme(!isDark);
        });
    }

    window.setTheme = setTheme;
})();