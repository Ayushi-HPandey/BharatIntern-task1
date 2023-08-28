const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const inputTemperature = document.getElementById('inputTemperature');
const unitSelect = document.getElementById('unitSelect');
const resultElement = document.getElementById('result');

convertBtn.addEventListener('click', convertTemperature);
resetBtn.addEventListener('click', resetConverter);

function convertTemperature() {
    const temperature = parseFloat(inputTemperature.value);
    const selectedUnit = unitSelect.value;
    
    if (isNaN(temperature)) {
        resultElement.textContent = 'Please enter a valid number';
        resultElement.style.color = 'red';
        return;
    }

    let convertedTemperature;
    let resultText;
    
    if (selectedUnit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultText = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F`;
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        resultText = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C`;
    }
    
    resultElement.textContent = resultText;
    resultElement.style.color = 'white';
}

function resetConverter() {
    inputTemperature.value = '';
    resultElement.textContent = '';
    resultElement.style.color = 'inherit';
}