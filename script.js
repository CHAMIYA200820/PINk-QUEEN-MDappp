// Upload and play the selected song
function uploadSong(event) {
    const file = event.target.files[0];
    if (file) {
        const audio = document.getElementById("uploadedSong");
        const source = document.getElementById("songSource");
        source.src = URL.createObjectURL(file);
        audio.load(); // Load the new file
        audio.play(); // Automatically play the uploaded song
    }
}

// Stop the music
function stopMusic() {
    const audio = document.getElementById("uploadedSong");
    audio.pause();
    audio.currentTime = 0;
}
