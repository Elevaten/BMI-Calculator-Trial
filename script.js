let addToDoButton = document.getElementById('addToDo');
let weight = document.getElementById('inputfield');
let height = document.getElementById('inputfield2');
let info = document.getElementById('info');
let report = document.getElementById('report');
let disease = document.getElementById('disease');
let percent = document.getElementById('percent');
let bmitext = document.getElementById('bmi');



addToDoButton.addEventListener('click', function(){
    let gender = document.querySelector('input[type="radio"]:checked');
    

    // Pop Up Tab//
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
    }

    if (report.style.display === 'none' || report.style.display === '') {
        report.style.display = 'block';
    }

    //Check if Height and Weight have values//
    if (height.value.trim() === ""){
        report.textContent = "Please Input Height Value";
        return;
    }
    if (weight.value.trim() === ""){
        report.textContent = "Please Input Weight Value";
        return;
    }
    
    //Solving For The BMI
    var square = (height.value*height.value);
    var bmi = (weight.value/square);

    bmitext.textContent = "BMI : " + Math.round(bmi);

    // Conditions //
    
    if(bmi < 16 ){
        report.textContent = "You Are Severely Underweight, Please Seek Medical Assistance";
        disease.textContent = "Very high risks of malnutrition, osteoporosis, and decreased immune function."
    }
    else if(bmi < 17 ){
        report.textContent = "You Are Underweight";
         disease.textContent = "High risks of malnutrition, osteoporosis, and decreased immune function."
    }
    else if(bmi < 18.5 ){
        report.textContent = "You Are Slightly Underweight";
         disease.textContent = "Potential risks of malnutrition, osteoporosis, and decreased immune function."
    }
    else if(bmi < 25 ){
        report.textContent = "You Are In A Healthy Weight 🙂";
        disease.textContent = "No Additional Health Risks."
    }
    else if(bmi < 30 ){
        report.textContent = "You Are Slightly Overweight";
        disease.textContent = "Aim for a lower BMI to avoid risks for diseases like type 2 diabetes, hypertension, cardiovascular disease, and certain cancers."
    }
    else if(bmi < 35 ){
        report.textContent = "You Are Obese Class I, Please Seek Medical Assistance";
        disease.textContent = "Increased risk for diseases like type 2 diabetes, hypertension, cardiovascular disease, and certain cancers."
    }
    else if(bmi < 40 ){
        report.textContent = "You Are Obese Class II, Please Seek Medical Assistance";
        disease.textContent = "High risk for diseases like type 2 diabetes, hypertension, cardiovascular disease, and certain cancers."
    }
    else if(bmi > 40 ){
        report.textContent = "You Are Obese Class III, Please Seek Medical Assistance";
         disease.textContent = "Very High risk for diseases like type 2 diabetes, hypertension, cardiovascular disease, and certain cancers."
    }

    if (gender.value === "male"){
        if (height.value < 1.59){
            percent.textContent = "You Are Shorter Than 5% of the Men Worldwide"
        }
        else if (height.value <= 1.6){
            percent.textContent = "You Are Taller Than 5% of the Men Worldwide"
        }
        else if (height.value <= 1.63){
            percent.textContent = "You Are Taller Than 10% of the Men Worldwide"
        }
        else if (height.value <= 1.68){
            percent.textContent = "You Are Taller Than 25% of the Men Worldwide"
        }
        else if (height.value <= 1.73){
            percent.textContent = "You Are Taller Than 50% of the Men Worldwide"
        }
        else if (height.value <= 1.78){
            percent.textContent = "You Are Taller Than 75% of the Men Worldwide"
        }
        else if (height.value <= 1.83){
            percent.textContent = "You Are Taller Than 90% of the Men Worldwide"
        }
        else if (height.value <= 1.85){
            percent.textContent = "You Are Taller Than 95% of the Men Worldwide"
        }
        else if (height.value > 1.85){
            percent.textContent = "You Are In The Top 5% Of Tallest Men Worldwide"
        }
    }
    if (gender.value === "female"){
        if (height.value < 1.48){
             percent.textContent = "You Are Shorter Than 5% of the Women Worldwide"
    }
        else if (height.value <= 1.49){
        percent.textContent = "You Are Taller Than 5% of the Women Worldwide"
    }
        else if (height.value <= 1.52){
        percent.textContent = "You Are Taller Than 10% of the Women Worldwide"
    }
        else if (height.value <= 1.55){
        percent.textContent = "You Are Taller Than 25% of the Women Worldwide"
    }
        else if (height.value <= 1.60){
        percent.textContent = "You Are Taller Than 50% of the Women Worldwide"
    }
        else if (height.value <= 1.65){
        percent.textContent = "You Are Taller Than 75% of the Women Worldwide"
    }
        else if (height.value <= 1.70){
        percent.textContent = "You Are Taller Than 90% of the Women Worldwide"
    }
        else if (height.value <= 1.73){
        percent.textContent = "You Are Taller Than 95% of the Women Worldwide"
    }
        else if (height.value > 1.73){
        percent.textContent = "You Are In The Top 5% Of Tallest Women Worldwide"
    }
    }

    weight.value = "";
    height.value = "";

})
