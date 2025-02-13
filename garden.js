function updateProgress() {
    progress += 1;
    progressBar.style.width = `${progress}%`;
    if (progress >= 100) {
        loadingScreen.style.display = 'none';
        
        // Start music playback
        const music = document.getElementById('backgroundMusic');
        music.play().catch(error => {
            // Handle autoplay restrictions
            console.log('Autoplay blocked, show play button');
            music.muted = true;
            music.play();
        });
        
        animate();
    } else {
        setTimeout(updateProgress, 20);
    }
}

// Add music control handler
document.getElementById('toggleAudio').addEventListener('click', () => {
    const music = document.getElementById('backgroundMusic');
    music.muted = !music.muted;
    this.textContent = music.muted ? '🔇 Unmute' : '♪ Mute';
    
    // If paused due to autoplay restrictions, start playback
    if (music.paused) {
        music.play();
    }
});