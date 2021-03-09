const btnCalculate = document.getElementById("button");

function calculateIMC() {
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (name !== '' && height !== '' && weight !== '') {
        const calculate = (weight / (height * height)).toFixed(1);

        let classification;

        if (calculate < 18.5) {
            classification = "Abaixo do peso";
        } 
        else if (calculate < 24.9) {
            classification = "com o peso normal";
        } 
        else if (calculate < 29.9) {
            classification = "com sobrepeso";
        } 
        else if (calculate < 39.9) {
            classification = 'obeso';
        } 
        else {
            classification = "com obesidade grave";
        }

        result.style.color = "black"
        result.textContent = `${name} seu IMC é de ${calculate} você está ${classification}.`;

    } else if (name === '' || height === '' || weight === '') {
        result.style.fontWeight = "700";
        result.style.color = "red";
        result.textContent = "Preencha os campos corretamente";
    }

}

btnCalculate.addEventListener("click", calculateIMC);

