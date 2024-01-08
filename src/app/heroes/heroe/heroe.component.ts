import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return`${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'SpiderMan';
  }
  changeAge():void{
    this.age = 25;
  }

  restaurarCambios():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
