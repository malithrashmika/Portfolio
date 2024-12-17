// Function to animate the progress bars
function animateProgressBar(element, targetWidth) {
    element.style.width = "0%"; // Reset to 0%
    setTimeout(() => {
        element.style.transition = "width 1s ease-in-out"; // Smooth transition
        element.style.width = targetWidth; // Animate to target width
    }, 100); // Small delay to trigger animation
}

// Function to animate the SVG circle
function animateCircle(circleElement, targetOffset) {
    circleElement.style.strokeDashoffset = "450"; // Reset to original offset (full circle)
    setTimeout(() => {
        circleElement.style.transition = "stroke-dashoffset 2s linear"; // Smooth transition
        circleElement.style.strokeDashoffset = targetOffset; // Animate to target offset
    }, 100); // Small delay to trigger animation
}

// Function to animate counters smoothly
function animateCounter(element, targetValue, speed) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter >= targetValue) {
            clearInterval(interval);
            counter = targetValue; // Ensure it doesn't go over
        }
        element.innerHTML = `${counter}%`;
        counter++;
    }, speed);
}

// Function to start all skill animations
function startSkillAnimations() {
    // Animate number counters
    const counters = [
        { element: document.getElementById('number'), target: 90 },
        { element: document.getElementById('number1'), target: 85 },
        { element: document.getElementById('number2'), target: 80 },
        { element: document.getElementById('number3'), target: 75 },
    ];

    counters.forEach(counter => {
        counter.element.innerHTML = "0%"; // Reset counter text
        animateCounter(counter.element, counter.target, 30);
    });

    // Animate progress bars
    const progressBars = [
        { element: document.querySelector('.progress-line.html span'), width: "90%" },
        { element: document.querySelector('.progress-line.css span'), width: "60%" },
        { element: document.querySelector('.progress-line.javascript span'), width: "85%" },
        { element: document.querySelector('.progress-line.java span'), width: "90%" },
        { element: document.querySelector('.progress-line.python span'), width: "90%" },
    ];

    progressBars.forEach(bar => animateProgressBar(bar.element, bar.width));

    // Animate SVG circles
    const circles = [
        { element: document.querySelector('.circle1'), offset: "157.5" },
        { element: document.querySelector('.circle2'), offset: "180" },
        { element: document.querySelector('.circle3'), offset: "200" },
        { element: document.querySelector('.circle4'), offset: "180" },
    ];

    circles.forEach(circle => animateCircle(circle.element, circle.offset));
}

// Intersection Observer to trigger animations when the section enters and leaves the viewport
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Skill section entered view!");
                startSkillAnimations(); // Start animations
            } else {
                console.log("Skill section left view!");
                resetSkillAnimations(); // Reset animations when the section leaves
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
);

// Function to reset progress bars, circles, and counters
function resetSkillAnimations() {
    // Reset progress bars
    const progressBars = document.querySelectorAll('.progress-line span');
    progressBars.forEach(bar => {
        bar.style.width = "0%"; // Reset to 0%
        bar.style.transition = "none"; // Remove transition for instant reset
    });

    // Reset SVG circles
    const circles = document.querySelectorAll('svg circle');
    circles.forEach(circle => {
        circle.style.strokeDashoffset = "450"; // Reset circle to full
        circle.style.transition = "none"; // Remove transition for instant reset
    });

    // Reset number counters
    const counters = document.querySelectorAll('#number, #number1, #number2, #number3');
    counters.forEach(counter => {
        counter.innerHTML = "0%"; // Reset text
    });
}

// Observe the skill section
const skillSection = document.querySelector('.skill-section');
observer.observe(skillSection);
