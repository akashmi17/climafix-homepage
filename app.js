document.addEventListener('DOMContentLoaded', () => {
    const yearLinks = document.querySelectorAll('.summit-year a');

    yearLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            alert(`You are about to visit the page for ${link.textContent.trim()}`);
        });
    });
});
