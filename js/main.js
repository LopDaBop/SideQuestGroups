// Main JavaScript for the SideQuestGroups website

document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to buttons after page load
    setTimeout(() => {
        const buttons = document.querySelectorAll('.group-button');
        buttons.forEach(button => {
            button.style.opacity = '1';
        });
    }, 100);
    
    // Add hover effect for touch devices
    function setupTouchHover() {
        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            document.body.classList.add('touch-device');
        }
    }
    
    setupTouchHover();
});
