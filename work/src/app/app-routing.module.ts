import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoneManageComponent } from './components/zone-manage/zone-manage.component';
import { EditZoneComponent } from './components/edit-zone/edit-zone.component';


const routes: Routes = [
  {path: '', component: ZoneManageComponent},
  {path: 'edit/:id', component: EditZoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
