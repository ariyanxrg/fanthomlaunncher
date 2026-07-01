(function() {
    const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    // Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: !isMobile,
        smoothTouch: false,
        touchMultiplier: 2
    });

    function raf(t) {
        lenis.raf(t);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Expose for other modules
    window.lenis = lenis;
    window.isMobile = isMobile;
})();