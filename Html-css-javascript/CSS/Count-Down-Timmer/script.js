const endDate = new Date("Mar 10, 2025 21:46:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // Time calculations
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const oneHourInMillis = 60 * 60 * 1000;
    const oneMinInMillis = 60 * 1000;
    const oneSecondInMillis = 1000;

    const days = Math.floor(distancePending / oneDayInMillis);
    const hrs = Math.floor((distancePending % oneDayInMillis) / oneHourInMillis);
    const mins = Math.floor((distancePending % oneHourInMillis) / oneMinInMillis);
    const secs = Math.floor((distancePending % oneMinInMillis) / oneSecondInMillis);

    // Populate UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // Progress bar calculation
    const totalDistance = endDate - startDate;
    let percentageDistance = (distanceCovered / totalDistance) * 100;

    // if (percentageDistance > 100) {
    //     percentageDistance = 100; // Cap progress bar at 100%
    // }

    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    // Timer expiration logic
    if (distancePending <= 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Expired";
        document.getElementById("progress-bar").style.width = "100%";
    }
}, 1000);
