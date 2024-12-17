function animateCircularProgressBars() {
    const circles = [
        { id: 'number', progress: 90, class: 'circle1' },
        { id: 'number1', progress: 85, class: 'circle2' },
        { id: 'number2', progress: 80, class: 'circle3' },
        { id: 'number3', progress: 75, class: 'circle4' },
    ];

    circles.forEach(({ id, progress, class: circleClass }) => {
        const circle = document.querySelector(`.${circleClass}`);
        const number = document.getElementById(id);

        const radius = circle.r.baseVal.value; // Get radius
        const circumference = 2 * Math.PI * radius; // Calculate circumference

        // Set up initial stroke-dasharray
        circle.style.strokeDasharray = `${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        let currentProgress = 0;

        const interval = setInterval(() => {
            if (currentProgress >= progress) {
                clearInterval(interval);
            } else {
                currentProgress++;
                number.textContent = `${currentProgress}%`;

                // Calculate and set stroke-dashoffset
                const offset = circumference - (currentProgress / 100) * circumference;
                circle.style.strokeDashoffset = offset;
            }
        }, 20); // Animation speed
    });
}

// Run animation when the document is loaded
document.addEventListener('DOMContentLoaded', animateCircularProgressBars);
