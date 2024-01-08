import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list/list.component';
import { AddPersonajesComponent } from './components/add-personajes/add-personajes.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddPersonajesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    MainPageComponent,
  ]

})
export class DbzModule { }
