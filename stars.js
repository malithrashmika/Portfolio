// Function to generate stars dynamically
function generateStars(type, numStars) {
    let boxShadow = "";
    for (let i = 0; i < numStars; i++) {
        let x = Math.random() * 2000;
        let y = Math.random() * 2000;
        boxShadow += `${x}px ${y}px #FFF${i !== numStars - 1 ? ',' : ''}`;
    }
    document.getElementById(type).style.boxShadow = boxShadow;
}

// Generate stars for each layer
generateStars("stars", 700);   // Small stars
generateStars("stars2", 200);  // Medium stars
generateStars("stars3", 100);  // Large stars
