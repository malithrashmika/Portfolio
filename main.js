// Function to animate the number counter
function animateCounter(numberElement, targetValue, speed) {
    let count = 0;
    let interval = setInterval(() => {
        if (count >= targetValue) {
            clearInterval(interval);  // Use the interval ID to clear it
        } else {
            count += 1;
            numberElement.innerHTML = `${count}%`;  // Update the HTML content
        }
    }, speed);  // Control speed with delay
}

// Selecting each number element and triggering their animation
let number = document.getElementById('number');
animateCounter(number, 90, 30);  // 90% target, 30ms interval

let number1 = document.getElementById('number1');
animateCounter(number1, 85, 30);  // 85% target, 30ms interval

let number2 = document.getElementById('number2');
animateCounter(number2, 80, 30);  // 80% target, 30ms interval

let number3 = document.getElementById('number3');
animateCounter(number3, 75, 30);  // 75% target, 30ms interval
