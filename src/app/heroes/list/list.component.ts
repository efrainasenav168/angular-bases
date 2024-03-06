import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public title:string="heroes list"
  public names:string[]=["ironman","capitan america","hulk","thor","spiderman"]
  public deleteHero?:string=""
  removeLastHero():void{
        this.deleteHero=this.names.pop()
        console.log(this.deleteHero)
        console.log(this.names)
  }

}
