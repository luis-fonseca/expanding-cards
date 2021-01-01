// retorna um node list, similar a um array
const panels = document.querySelectorAll('.panel');

window.addEventListener('DOMContentLoaded', () => {
    
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
    });

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }
});