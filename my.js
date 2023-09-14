function result() {
    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let bmi = weight/(height * height);
console.log(bmi);
    if (bmi <18.5) {
        document.getElementById('bmi').innerHTML = 'Underweight';
    } else if (18.5 <= bmi < 25.0) {
        document.getElementById('bmi').innerHTML = 'Normal';

    } else if (25.0 <= bmi < 30.0) {
    document.getElementById('bmi').innerHTML = 'Overweight';
    } else {
    document.getElementById('bmi').innerHTML = 'Obese';}
}