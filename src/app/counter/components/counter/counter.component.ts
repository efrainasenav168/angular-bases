import { Component } from '@angular/core';

@Component({
    selector:"app-counter",
    template:`
        <p>{{title}}</p>
        <p>Counter:{{counter}}</p>
        <button (click)="levelCounter(1)">1</button>
        <button (click)="resetCounter()">reset</button>
        <button (click)="levelCounter(-1)">-1</button>
    `
})
export class CounterComponent{
    public title:string="desde el modulo counter"
    public counter:number=10;
    
        levelCounter(valor:number):void{
            this.counter += valor
        }
        resetCounter():void{
            this.counter=10
        }

}