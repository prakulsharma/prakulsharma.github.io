const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

// Check for saved user preference (if any)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeIcon.classList.toggle('fa-sun', savedTheme === 'dark'); // Show sun icon for dark mode
    themeIcon.classList.toggle('fa-moon', savedTheme !== 'dark'); // Show moon icon for light mode
}

// Add event listener for the toggle button
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change icon and save user preference
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // Light mode icon (sun)
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon'); // Dark mode icon (moon)
        localStorage.setItem('theme', 'light');
    }
});
