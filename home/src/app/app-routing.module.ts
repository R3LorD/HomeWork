import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeComponent } from './life/life.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  {path: '', component: LifeComponent},
  {path: 'second', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
