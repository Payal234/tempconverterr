
document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert");
    convertButton.addEventListener("click", function () {
        const temperatureInput = document.getElementById("temperature").value;
        const unit = document.getElementById("unit").value;
        let result = "";

        if (unit === "celsius") {
            const fahrenheit = (temperatureInput * 9/5) + 32;
            result = `${temperatureInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        } else if (unit === "fahrenheit") {
            const celsius = (temperatureInput - 32) * 5/9;
            result = `${temperatureInput}°F is equal to ${celsius.toFixed(2)}°C`;
        } else {
            result = "Invalid unit";
        }

        document.getElementById("result").textContent = result;
    });
});