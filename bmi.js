function bmi() {
  alert("hello");



  Let foot = document.queryselector(".foot").value;
  Let inch = document.queryselector(".inch").value;
  Let metre = feet + "." + inch;

  let height = metre/3.28;
  Let weight = document.queryselector(".weight").value;
  let bmi = weight / math.pow(height,2);
  if (bmi > 0 && bmi <= 15) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>very severely underweight</span>.';
} else if (bmi > 15 && bmi <= 16) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>severely underweight</span>.';
} else if (bmi > 16 && bmi <= 18.5) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>Underweight</span>.';
} else if (bmi > 18.5 && bmi <= 25) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>Normal (healthy weight)</span>.';
} else if (bmi > 25 && bmi <= 30) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>Overweight</span>.';
} else if (bmi > 30 && bmi <= 35) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>Obese Class I (Moderately obese)</span>.';
} else if (bmi > 35 && bmi <= 40) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>Obese Class II (Severely obese)</span>.';
} else if (bmi > 40 && bmi <= 45) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>Obese Class III (Very severely obese)</span>.';
} else if (bmi > 45 && bmi <= 50) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>Obese Class IV (Morbidly Obese)</span>.';
} else if (bmi > 50 && bmi <= 60) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>Obese Class V (Super Obese)</span>.';
} else if (bmi > 60) {
  document.getElementById('output').innerHTML = 'Your BMI is: ' + bmi + '<br>Your weight is <span>Obese Class VI (Hyper Obese)</span>.';
} else {
  document.getElementById('output').innerHTML = 'Please type valid numbers.';
}
}
