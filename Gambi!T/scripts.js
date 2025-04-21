// Get the audio element
const music = document.getElementById("bg-music");

// Function to start music (auto or on first click)
function startMusic() {
    // Set initial volume (0.0 to 1.0)
    music.volume = 0.2; // adjust if needed

    // Try to autoplay
    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("🎵 Music started");
            })
            .catch(() => {
                console.log("🛑 Autoplay blocked – waiting for user interaction");

                // Wait for first click to start music
                document.addEventListener("click", () => {
                    music.play();
                }, { once: true });
            });
    }
}

// Run on page load
window.addEventListener("load", startMusic);