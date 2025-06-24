document.addEventListener('DOMContentLoaded', function() {
    // Update the apply button with the Google Form link when ready
    const applyButton = document.getElementById('apply-button');
    if (applyButton) {
        // Add redirection to the Google Form
        applyButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'https://forms.gle/3S4MMgy49G9ZkYPm9';
        });
    }

    // Add animation to content
    const content = document.querySelector('.group-content');
    if (content) {
        content.style.opacity = '1';
    }
});
