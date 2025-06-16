document.addEventListener('DOMContentLoaded', function() {
    // Update the apply button with the Google Form link when ready
    const applyButton = document.getElementById('apply-button');
    if (applyButton) {
        // Replace '#' with your actual Google Form link
        applyButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Please provide the Google Form link to replace this alert.');
            // Uncomment and update this line with your Google Form URL
            // window.location.href = 'YOUR_GOOGLE_FORM_LINK';
        });
    }
    
    // Add animation to content
    const content = document.querySelector('.group-content');
    if (content) {
        content.style.opacity = '1';
    }
});
