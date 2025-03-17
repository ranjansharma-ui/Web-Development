document.addEventListener("DOMContentLoaded", function() {
    let count = 0;

    const counterDisplay = document.getElementById('counter-display');
    const counterButton = document.getElementById('counter-button')


    counterButton.addEventListener('click', function() {
        count++;

        counterDisplay.textContent = `You clicked ${count} times`
    });
});