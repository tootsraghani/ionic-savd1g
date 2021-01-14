
  import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  height: number;
  weight: number;
  age: number;
  activityLevel: string;
  actVal: number;
  gender: string;
  calorieCount: string;
  calorie: number;

constructor(public navCtrl: NavController) {}

calculateActivity(){
  if (this.activityLevel = "Some or no activity"){
    this.actVal = 1.2
  }
  else if (this.activityLevel = "Exercise 1-2 times a week"){
    this.actVal = 1.4
  }
  else if (this.activityLevel = "Exercise 2-3 times a week"){
    this.actVal = 1.6
  }
  else if (this.activityLevel = "Exercise 4-5 times a week"){
    this.actVal = 1.75
  }
  else if (this.activityLevel = "Exercise 6-7 times a week"){
    this.actVal = 2
  }
  else if (this.activityLevel = "Professional Athlete"){
    this.actVal = 2.3
  }
  else{
    this.actVal = "invalid"
  }
}
calculateCalories() {
if (this.gender = "m"){
  this.calorie = (((10*this.weight) + (6.25*this.height) - (5*this.age )) + 5) * this.actVal;
  this.calorie = parseFloat(this.calorie.toFixed(2));
  this.calorieCount = "The right amount of calories for you is: this.calorie" 
}
else if (this.gender = "f"){
  this.calorie = (((10*this.weight) + (6.25*this.height) - (5*this.age )) + 5) * this.actVal;
}

  if (this.bmi < 18.5) {
    this.bmiMessage = "Underweight";
  } 
  else if (this.bmi > 18.5 && this.bmi < 25) {
    this.bmiMessage = "Normal";
  } 
  else if (this.bmi > 25 && this.bmi < 30) {
    this.bmiMessage = "Overweight";
  } 
  else {
    this.bmiMessage = "Obese";

  }
}
}
