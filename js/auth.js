(function() {
    // ===== DISABLE RIGHT CLICK =====
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // ===== DISABLE DEV TOOLS =====
    document.addEventListener('keydown', function(e) {
        const isDevTools = (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.key === 'U')
        );
        if (isDevTools) {
            e.preventDefault();
            return false;
        }
    });

    // ===== DISABLE COPY/CUT/PASTE =====
    document.addEventListener('copy', function(e) { e.preventDefault(); return false; });
    document.addEventListener('cut', function(e) { e.preventDefault(); return false; });
    document.addEventListener('paste', function(e) { e.preventDefault(); return false; });

    // ===== DEV TOOLS DETECTION =====
    let devtools = function() {};
    devtools.toString = function() {
        if (!window._devtoolsFlag) {
            window._devtoolsFlag = true;
            document.body.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0a0a0f;color:#ff4444;font-family:monospace;text-align:center;padding:20px">
                    <div><h1>🚫 ACCESS DENIED</h1><p>Developer tools detected. Please close them to continue.</p></div>
                </div>
            `;
            alert('Developer tools detected!');
        }
    };

    // ===== CLEAR CONSOLE =====
    setInterval(() => {
        console.clear();
        console.log('%c🔒 Protected by Fanthom Security', 'color:#2ecc2e;font-size:16px');
        console.log('%cCopying or inspecting this site is prohibited', 'color:#ff4444;font-size:12px');
    }, 500);

    // ===== DISABLE DRAG =====
    document.addEventListener('dragstart', function(e) { e.preventDefault(); return false; });
    document.addEventListener('selectstart', function(e) { e.preventDefault(); return false; });

    // ===== DISABLE IMAGE DRAG =====
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('draggable', 'false');
        img.addEventListener('dragstart', function(e) { e.preventDefault(); return false; });
    });
})();