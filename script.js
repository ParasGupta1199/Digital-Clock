function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

    const formattedTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${period}`;
    document.getElementById('clock').textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call
