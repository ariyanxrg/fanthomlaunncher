(function() {
    const homePage = document.getElementById('homePage');
    const storePage = document.getElementById('storePage');
    const aboutPage = document.getElementById('aboutPage');
    const statusPage = document.getElementById('statusPage');
    const helpPage = document.getElementById('helpPage');
    
    const navItems = document.querySelectorAll('.nav-item');
    const mobileNavBtns = document.querySelectorAll('.mobile-nav-btn');
    const homeStoreBtn = document.getElementById('homeStoreBtn');

    const pages = {
        home: homePage,
        store: storePage,
        about: aboutPage,
        status: statusPage,
        help: helpPage
    };

    function showPage(pageName) {
        // Hide all pages
        Object.values(pages).forEach(p => p.classList.remove('active-page'));
        
        // Show target page
        if (pages[pageName]) {
            pages[pageName].classList.add('active-page');
        }

        // Update desktop nav
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === pageName) {
                item.classList.add('active');
            }
        });

        // Update mobile nav
        mobileNavBtns.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === pageName) {
                item.classList.add('active');
            }
        });

        // Scroll to top
        if (window.isMobile) {
            window.scrollTo({ top: 0, behavior: 'auto' });
        } else if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
        }
    }

    // Desktop nav
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            if (page) showPage(page);
        });
    });

    // Mobile nav
    mobileNavBtns.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            if (page) showPage(page);
        });
    });

    // Store button on home page
    if (homeStoreBtn) {
        homeStoreBtn.addEventListener('click', () => showPage('store'));
    }

    // Expose for other modules
    window.showPage = showPage;
})();