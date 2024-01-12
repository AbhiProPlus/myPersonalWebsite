document.addEventListener("DOMContentLoaded", function () {
    const titleSections = document.querySelectorAll('.title-section');

    titleSections.forEach(section => {
        section.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});