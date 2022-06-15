import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi App Angular 2';
  subtitle = 'calculadora';
  number1: number = 0
  number2: number = 0
  answer: number = 0

  add(): void{
    this.answer = this.number1 + this.number2
  }

  subtract(): void{
    this.answer = this.number1 - this.number2
  }

  multiply(): void{
    this.answer = this.number1 * this.number2
  }

  divide(): void{
    if (this.number2 != 0){
      this.answer = this.number1 / this.number2
    }else{
      alert("Can't divide by 0")
    }
  }

  operar(X : string): void{
    let sign = X
    if (sign == "0"){
      this.add()
    }
    else if (sign == "1"){
      this.subtract()
    }
    else if (sign == "2"){
      this.multiply()
    }
    else if (sign == "3"){
      this.divide()
    }
  }
  setOperation(): void{
    alert("mi nombre es +")
  }
}
