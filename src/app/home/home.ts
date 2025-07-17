import { Component, signal } from '@angular/core';
import { Greeting } from "../components/greeting/greeting";

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
message=signal('Welcome to the Home Component!');


keyUpHandler(event: KeyboardEvent) {
  console.log(`user pressed ${event.key}`);
}}
