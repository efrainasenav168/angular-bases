import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public title:string="Desde Hero"
  public nombre:string="ironman";
  public age:number=45;
  get capitalazeNombre():string{
      return this.nombre.toUpperCase()
  }
  getDescriptionHero():string{
    return `${this.nombre} - ${this.age}`

  }
  changeName(name:string):void{
      this.nombre=name;
      document.querySelector("#nombre")?.classList.add("bg-red")

       

    
  }
  changeAge(age:number):void{
    this.age=age;
  }
  resetForm():void{
    this.nombre="ironman";
    this.age=45
  }
}
