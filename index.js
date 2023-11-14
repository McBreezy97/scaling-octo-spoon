function loadStyles() {
    // Create a new link element
    const link = document.createElement('link');
    link.rel = 'stylesheet';

    // Set the href based on the window's width
    if (window.innerWidth < 768) {
        link.href = 'mobile.css';
    } else {
        link.href = 'styles.css';
    }

    // Append the link element to the head
    document.head.appendChild(link);
}

// Load styles when the page loads
loadStyles();

// Load styles when the window is resized
window.addEventListener('resize', loadStyles);
