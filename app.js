// app.js
function calculateCalories() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById("activity").value);

    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const calories = bmr * activity;
    document.getElementById("result").innerText = `Dein täglicher Kalorienbedarf: ${Math.round(calories)} kcal`;
}
/*
async function calculateCalories() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById("activity").value);

    const response = await fetch("http://localhost:3001/api/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ weight, height, age, gender, activity })
    });

    const data = await response.json();
    document.getElementById("result").innerText = `Dein täglicher Kalorienbedarf: ${data.calories} kcal`;
}
