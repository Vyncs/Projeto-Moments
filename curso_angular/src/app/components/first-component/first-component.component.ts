import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Matheus'; 
  age = 18;
  job = 'Software Enginer';
  hobbies = ['Correr', 'Jogar', 'Ler']
  car = {
    name: 'Corsa'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
