document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');
    const birthdaySong = document.getElementById('birthdaySong');
    const muteButton = document.getElementById('muteButton');

    // Play song and trigger confetti when the card is clicked or hovered
    card.addEventListener('click', function () {
        // Play the Happy Birthday song
        if (birthdaySong.paused) {
            birthdaySong.play();
        }

        // Trigger confetti effect
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    // Optional: Add confetti on page load
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 500); // Delay confetti by 500ms after page load

    // Mute/Unmute button functionality
    muteButton.addEventListener('click', function () {
        if (birthdaySong.paused) {
            birthdaySong.play();
            muteButton.textContent = 'Mute';
        } else {
            birthdaySong.pause();
            muteButton.textContent = 'Unmute';
        }
    });
});
