import { Component, signal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

  // counterValue = signal(0);
  // increment(){
  //   this.counterValue.update((val )=> val+1)
  // }
  // decrement(){
  //    this.counterValue.update((val )=> val-1)
  // }
  // reset(){
  //    this.counterValue.set(0)

//   }

counterValue = signal(0);

  increase() {
    this.counterValue.update(val => val + 1);
  }

  decrement() {
    this.counterValue.update(val => val - 1);
  }
  
}
