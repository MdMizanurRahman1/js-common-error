function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    clock.textContent = timeString;
}

setInterval(updateClock, 1000); // Update the clock every second
