import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'repasoAngular';
  public counter:number=20;

  levelCounter(valor:number):void{
    this.counter += valor;
  }
  resetCounter():void{
    this.counter=20;
  }

}
