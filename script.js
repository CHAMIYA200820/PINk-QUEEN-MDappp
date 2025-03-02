// Function to upload and play the selected song
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

// Function to stop the music
function stopMusic() {
  const audio = document.getElementById("uploadedSong");
  audio.pause();
  audio.currentTime = 0;
}

// Function to start Chat AI interaction (This is a placeholder for actual AI integration)
function startChatAI() {
  const chatContainer = document.getElementById("chatAI");
  chatContainer.innerHTML = "Connecting to AI...";

  // Simulate AI response (You can replace this with actual API logic)
  setTimeout(() => {
    chatContainer.innerHTML = "Hello! How can I assist you today?";
  }, 2000);
}
