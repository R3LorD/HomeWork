import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoneManageComponent } from './components/zone-manage/zone-manage.component';
import { ZoneListComponent } from './components/zone-list/zone-list.component';
import { AddZoneComponent } from './components/add-zone/add-zone.component';
import { EditZoneComponent } from './components/edit-zone/edit-zone.component';
import { ZoneSerService } from './service/zone-ser.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ZoneManageComponent,
    ZoneListComponent,
    AddZoneComponent,
    EditZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ZoneSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
