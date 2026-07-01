(function() {
    const signinPanel = document.getElementById('signinPanel');
    const signinHeaderBtn = document.getElementById('signinBtn');
    const closePanelBtn = document.getElementById('closeSigninPanel');

    const forgotModal = document.getElementById('forgotModal');
    const openForgotBtn = document.getElementById('openForgotModalBtn');
    const closeForgotBtn = document.getElementById('closeForgotModalBtn');

    const authTabBtns = document.querySelectorAll('.auth-tab-btn');
    const loginContainer = document.getElementById('loginFormContainer');
    const registerContainer = document.getElementById('registerFormContainer');

    // ===== PANEL TOGGLE =====
    if (signinHeaderBtn) {
        signinHeaderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            signinPanel.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closePanelBtn) {
        closePanelBtn.addEventListener('click', () => {
            signinPanel.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (signinPanel) {
        signinPanel.addEventListener('click', (e) => {
            if (e.target === signinPanel) {
                signinPanel.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ===== AUTH TABS =====
    authTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            authTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.getAttribute('data-auth-tab') === 'login') {
                loginContainer.classList.add('active-auth-form');
                registerContainer.classList.remove('active-auth-form');
            } else {
                loginContainer.classList.remove('active-auth-form');
                registerContainer.classList.add('active-auth-form');
            }
        });
    });

    // ===== FORGOT PASSWORD =====
    if (openForgotBtn) {
        openForgotBtn.addEventListener('click', () => {
            forgotModal.style.display = 'flex';
        });
    }

    if (closeForgotBtn) {
        closeForgotBtn.addEventListener('click', () => {
            forgotModal.style.display = 'none';
        });
    }

    if (forgotModal) {
        forgotModal.addEventListener('click', (e) => {
            if (e.target === forgotModal) {
                forgotModal.style.display = 'none';
            }
        });
    }

    // ===== LOGIN =====
    document.getElementById('loginSubmitBtn')?.addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        if (!email || !password) {
            return alert('Please fill in both email and password.');
        }
        alert(`Welcome back!\n\nSigned in as: ${email}`);
        signinPanel.classList.remove('active');
        document.body.style.overflow = '';
    });

    // ===== REGISTER =====
    document.getElementById('registerSubmitBtn')?.addEventListener('click', () => {
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('registerConfirmPassword').value;
        const terms = document.getElementById('termsCheck').checked;

        if (!name || !email || !password || !confirm) {
            return alert('Please fill in all fields.');
        }
        if (password !== confirm) {
            return alert('Passwords do not match.');
        }
        if (!terms) {
            return alert('Please agree to the Terms of Service.');
        }

        alert(`Account created successfully!\n\nWelcome, ${name}!`);
        signinPanel.classList.remove('active');
        document.body.style.overflow = '';
    });

    // ===== SEND RESET =====
    document.getElementById('sendResetBtn')?.addEventListener('click', () => {
        const email = document.getElementById('resetEmail').value;
        if (!email) {
            return alert('Please enter your email address.');
        }
        alert(`Password reset link sent to ${email}`);
        forgotModal.style.display = 'none';
        document.getElementById('resetEmail').value = '';
    });

    // ===== SOCIAL BUTTONS =====
    document.querySelectorAll('#googleLoginBtn, #googleRegisterBtn').forEach(btn => {
        btn?.addEventListener('click', () => alert('Google Sign-In (Demo)'));
    });

    document.querySelectorAll('#discordLoginBtn, #discordRegisterBtn').forEach(btn => {
        btn?.addEventListener('click', () => alert('Discord Sign-In (Demo)'));
    });
})();