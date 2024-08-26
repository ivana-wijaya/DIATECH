// document.getElementById('calculate-btn').addEventListener('click', function() {
//     const pregnantTime = document.getElementById('pregnantInput').value;
//     const plasmaGlucose = document.getElementById('plasmaInput').value;
//     const diastolicPressure = document.getElementById('diastolicInput').value;
//     const tricepsThickness = document.getElementById('tricepsInput').value;
//     const serumInsulin = document.getElementById('serumInsulinInput').value;
//     const bmi = document.getElementById('bmiInput').value;
//     const pedigree = document.getElementById('pedigreeInput').value;
//     const age = document.getElementById('ageInput').value;

//     console.log('Pregnant Time:', pregnantTime);
//     console.log('Plasma Glucose Concentration:', plasmaGlucose);
//     console.log('Diastolic Blood Pressure:', diastolicPressure);
//     console.log('Triceps Skin Fold Thickness:', tricepsThickness);
//     console.log('2-Hours Serum Insulin:', serumInsulin);
//     console.log('Body Mass Index:', bmi);
//     console.log('Diabetes Pedigree:', pedigree);
//     console.log('Age:', age);

//     fetch('http://127.0.0.1:5000/predict', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(result => {
//         document.getElementById('prediction-result').innerHTML = `<p>Prediction: ${result.prediction}</p>`;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// });

document.getElementById('calculate-btn').addEventListener('click', function() {
    const pregnantTime = document.getElementById('pregnantInput').value;
    const plasmaGlucose = document.getElementById('plasmaInput').value;
    const diastolicPressure = document.getElementById('diastolicInput').value;
    const tricepsThickness = document.getElementById('tricepsInput').value;
    const serumInsulin = document.getElementById('serumInsulinInput').value;
    const bmi = document.getElementById('bmiInput').value;
    const pedigree = document.getElementById('pedigreeInput').value;
    const age = document.getElementById('ageInput').value;

    console.log('Pregnant Time:', pregnantTime);
    console.log('Plasma Glucose Concentration:', plasmaGlucose);
    console.log('Diastolic Blood Pressure:', diastolicPressure);
    console.log('Triceps Skin Fold Thickness:', tricepsThickness);
    console.log('2-Hours Serum Insulin:', serumInsulin);
    console.log('Body Mass Index:', bmi);
    console.log('Diabetes Pedigree:', pedigree);
    console.log('Age:', age);

    // Define the data object with the input values
    const data = {
        pregnantTime: parseFloat(pregnantTime),
        plasmaGlucose: parseFloat(plasmaGlucose),
        diastolicPressure: parseFloat(diastolicPressure),
        tricepsThickness: parseFloat(tricepsThickness),
        serumInsulin: parseFloat(serumInsulin),
        bmi: parseFloat(bmi),
        pedigree: parseFloat(pedigree),
        age: parseFloat(age)
    };

    // Now make the POST request
    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('prediction-result').innerHTML = `<p>Prediction: ${result.prediction}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
