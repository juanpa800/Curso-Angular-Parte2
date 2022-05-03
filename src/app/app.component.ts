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

  sumar(): void{
    this.answer = this.number1 + this.number2
  }
  setOperation(): void{
    alert("mi nombre es +")
  }
}
