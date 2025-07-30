// Interactive greeting functionality
function wave() {
    const button = document.querySelector('.wave-btn');
    const greeting = document.querySelector('.greeting');
    
    // Animate the wave button
    button.style.animation = 'wave 0.5s ease';
    
    // Update greeting text with random friendly messages
    const greetings = [
        'Hello there! 👋',
        'Nice to see you! 😊',
        'Hi friend! 🌟',
        'Welcome! ✨',
        'Greetings! 🎉'
    ];
    
    greeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];
    
    // Reset animation
    setTimeout(() => {
        button.style.animation = 'none';
        setTimeout(() => {
            button.style.animation = '';
        }, 10);
    }, 500);
}