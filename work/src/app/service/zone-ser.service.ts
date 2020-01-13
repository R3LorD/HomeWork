import { Injectable } from '@angular/core';
import { TimeZone } from '../models/timeZone.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneSerService {

  TimeZones = new Array<TimeZone>();

  addNewZone(newCity: string, offset: number){
    if(this.TimeZones.find(el => el.city === newCity) == null){
      this.TimeZones.push(new TimeZone(TimeZone.countId, newCity, offset));
      TimeZone.countId++;
    }
  }

  delZone(id: number){
    const deletingZone = this.TimeZones.indexOf(this.TimeZones.find(el => el.id == id));
    this.TimeZones.splice(deletingZone, 1);
  }
}
