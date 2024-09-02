function toggleMenu() {
    const menu = document.querySelector('.menu');
    const scrollingTextContainer = document.querySelector('.scrolling-text-container');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        if (!scrollingTextContainer.classList.contains('persistent')) {
            scrollingTextContainer.classList.remove('visible'); // Hide scrolling text if it's not persistent
        }
    } else {
        menu.style.display = 'block';
        scrollingTextContainer.classList.add('visible'); // Show scrolling text

        // Force reset animation by changing the animation property
        const scrollingText = document.querySelector('.scrolling-text');
        scrollingText.style.animation = 'none'; // Remove animation
        void scrollingText.offsetWidth; // Trigger reflow (force DOM to recalculate layout)
        scrollingText.style.animation = ''; // Add the animation back, which triggers restart
    }
}

// Make sure the scrolling text is always visible when the menu is opened
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu ul li a');
    const scrollingTextContainer = document.querySelector('.scrolling-text-container');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (!scrollingTextContainer.classList.contains('persistent')) {
                scrollingTextContainer.classList.remove('visible'); // Hide scrolling text on navigation
            }
        });
    });
});
