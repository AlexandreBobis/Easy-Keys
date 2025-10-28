// Get all key buttons
const keys = document.querySelectorAll('.key');
const notification = document.getElementById('notification');

// Add click event listener to each key
keys.forEach(key => {
    key.addEventListener('click', () => {
        const char = key.getAttribute('data-char');
        copyToClipboard(char);
    });
});

// Function to copy text to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showNotification(`"${text}" copié !`);
    } catch (err) {
        console.error('Erreur lors de la copie:', err);
        showNotification('Erreur lors de la copie');
    }
}

// Function to show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 1500);
}
