document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar-list');

    // Dynamically create navbar
    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = section.getAttribute('data-nav');
        a.href = `#${section.id}`;
        a.classList.add('menu-link');

        a.addEventListener('click', function(event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });

        li.appendChild(a);
        navList.appendChild(li);
    });

    // Function to highlight nav items on scroll
    function highlightNavOnScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                // Clear all active classes first
                document.querySelectorAll('.menu-link').forEach(link => {
                    link.classList.remove('active');
                });
                // Add active class to the corresponding nav item
                document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
            }
        });
    }

    // Set section as active on initial load
    highlightNavOnScroll();

    // Set section as active on scroll
    window.addEventListener('scroll', highlightNavOnScroll);
});
