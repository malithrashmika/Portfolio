// Function to animate the progress bars
function animateProgressBar(element, targetWidth) {
    element.style.width = "0%";  // Reset to 0%
    setTimeout(() => {
        element.style.transition = "width 1s ease-in-out";  // Add smooth transition
        element.style.width = targetWidth;  // Set to target width
    }, 100);  // Small delay for the animation to trigger
}

// Function to animate the SVG circle
function animateCircle(circleElement, targetOffset) {
    circleElement.style.strokeDashoffset = "450";  // Reset to original offset (full circle)
    setTimeout(() => {
        circleElement.style.transition = "stroke-dashoffset 2s linear";  // Add smooth transition
        circleElement.style.strokeDashoffset = targetOffset;  // Animate to target offset
    }, 100);  // Small delay for the animation to trigger
}

// Function to reset and start the animation for each skill bar and circle
function startSkillAnimations() {
    // Reset and animate number counters
    let number = document.getElementById('number');
    let number1 = document.getElementById('number1');
    let number2 = document.getElementById('number2');
    let number3 = document.getElementById('number3');

    number.innerHTML = "0%";
    number1.innerHTML = "0%";
    number2.innerHTML = "0%";
    number3.innerHTML = "0%";

    animateCounter(number, 90, 30);
    animateCounter(number1, 85, 30);
    animateCounter(number2, 80, 30);
    animateCounter(number3, 75, 30);

    // Animate the progress bars
    let htmlBar = document.querySelector('.progress-line.html span');
    let cssBar = document.querySelector('.progress-line.css span');
    let jsBar = document.querySelector('.progress-line.javascript span');
    let javaBar = document.querySelector('.progress-line.java span');
    let pythonBar = document.querySelector('.progress-line.python span');

    animateProgressBar(htmlBar, "90%");
    animateProgressBar(cssBar, "60%");
    animateProgressBar(jsBar, "85%");
    animateProgressBar(javaBar, "90%");
    animateProgressBar(pythonBar, "90%");

    // Animate the SVG circles
    let circle1 = document.querySelector('.circle1');
    let circle2 = document.querySelector('.circle2');
    let circle3 = document.querySelector('.circle3');
    let circle4 = document.querySelector('.circle4');

    animateCircle(circle1, "157.5");  // Corresponding to 90%
    animateCircle(circle2, "180");    // Corresponding to 80%
    animateCircle(circle3, "200");    // Corresponding to 75%
    animateCircle(circle4, "180");    // Corresponding to 85%
}

// Intersection Observer for triggering the animations when the section is in view
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Skill section entered view!");
            startSkillAnimations();  // Start the animations when in view
        }
    });
}, {
    threshold: 0.5  // Adjust this threshold as needed
});

// Observe the skill section
let skillSection = document.querySelector('.skill-section');
observer.observe(skillSection);
