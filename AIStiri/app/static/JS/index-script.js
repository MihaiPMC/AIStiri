document.addEventListener('DOMContentLoaded', function() {
    const latestNewsLink = document.getElementById('latest-news-link');
    const mobileLatestNews = document.getElementById('mobile-latest-news');
    const latestNewsSection = document.getElementById('latest-news');
    const menuItems = document.getElementById('MenuItems');
    const menuIcon = document.querySelector('.menu-icon');
    const backIcon = document.querySelector('.back-icon');
    const overlay = document.getElementById('overlay');

    function toggleLatestNews(event) {
        event.preventDefault();
        latestNewsSection.classList.toggle('hidden');
        // If called from mobile menu, close the menu
        menuItems.classList.remove('active');
    }

    // Desktop latest news toggle
    latestNewsLink.addEventListener('click', toggleLatestNews);
    // Mobile latest news toggle
    mobileLatestNews.addEventListener('click', toggleLatestNews);

    function resetAnimations() {
        const header = document.querySelector('.mobile-header');
        const ul = menuItems.querySelector('ul');
        const items = menuItems.querySelectorAll('li');
        
        // Remove animation classes
        header.classList.remove('animate');
        ul.classList.remove('animate');
        items.forEach(item => item.classList.remove('animate'));
        
        // Force reflow
        void header.offsetWidth;
        void ul.offsetWidth;
        items.forEach(item => void item.offsetWidth);
        
        // Add animation classes back
        header.classList.add('animate');
        ul.classList.add('animate');
        items.forEach((item, index) => {
            item.style.animationDelay = `${0.2 + (index * 0.1)}s`;
            item.classList.add('animate');
        });
    }

    // Menu toggle handlers
    menuIcon.addEventListener('click', function() {
        menuItems.classList.add('active');
        overlay.classList.add('active');
        resetAnimations();
    });

    function closeMenu() {
        menuItems.classList.remove('active');
        overlay.classList.remove('active');
        // Reset animations when menu closes
        setTimeout(() => {
            const header = document.querySelector('.mobile-header');
            const ul = menuItems.querySelector('ul');
            const items = menuItems.querySelectorAll('li');
            
            header.classList.remove('animate');
            ul.classList.remove('animate');
            items.forEach(item => item.classList.remove('animate'));
        }, 300); // Wait for transition to complete
    }

    backIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        closeMenu();
    });

    overlay.addEventListener('click', closeMenu);
});