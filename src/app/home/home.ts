import { Component, signal } from '@angular/core';
import { Greeting } from "../components/greeting/greeting";
import { Counter } from "../components/counter/counter";

@Component({
  selector: 'app-home',
  imports: [Greeting,  Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
message=signal('Welcome to the Home Component!');


keyUpHandler(event: KeyboardEvent) {
  console.log(`user pressed ${event.key}`);
}}
