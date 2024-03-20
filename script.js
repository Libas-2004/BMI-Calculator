document.getElementById("bmiform").addEventListener('submit', function(e) {
    e.preventDefault();
    
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseInt(document.getElementById('weight').value);

    if (gender && age && heightFeet && heightInches && weight) {
        const height = (heightFeet * 12) + heightInches; // Total height in inches
        const heightMeters = height * 0.0254; // Convert height to meters for BMI calculation
        const bmi = weight / (heightMeters * heightMeters); // Calculate BMI
        const bmiResult = document.getElementById('result');

        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        
        let resultText = `Your BMI is: ${bmi.toFixed(2)} <br> Category: ${category}`;
        bmiResult.innerHTML = resultText;
    }
});
