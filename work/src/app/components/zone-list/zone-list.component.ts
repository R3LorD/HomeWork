import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ZoneSerService } from 'src/app/service/zone-ser.service';
import { TimeZone } from 'src/app/models/timeZone.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})
export class ZoneListComponent implements OnInit {
  
  constructor(private timeService: ZoneSerService,
    private cdr: ChangeDetectorRef) { }
  
  timeZoneList = new Array<TimeZone>();
  cityInput = new FormControl();
  filteredZoneSearch: Observable<string[]>;
  cities: string[] = [];
  searchedZone: TimeZone = null;
  detectChangesInterval;


  ngOnInit() {
    this.timeZoneList = this.timeService.TimeZones;

    this.timeZoneList.forEach(element => {
      this.cities.push(element.city);
    });
    
    this.filteredZoneSearch = this.cityInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );


    console.log(this.filteredZoneSearch);
    this.detectChangesInterval = setInterval(() => { this.cdr.detectChanges(); }, 1000);
  }


  getTimeWithOffset(offset: number): string {
    const returingTime: Date = new Date(Date.now());
    returingTime.setHours(returingTime.getHours() + (+offset + +returingTime.getTimezoneOffset() / 60));
    let returtingString = '';
    if (returingTime.getHours() < 10) {
      returtingString += '0' + returingTime.getHours().toString() + ':';
    } else {
      returtingString += returingTime.getHours().toString() + ':';
    }

    if (returingTime.getMinutes() < 10) {
      returtingString += '0' + returingTime.getMinutes().toString() + ':';
    } else {
      returtingString += returingTime.getMinutes().toString() + ':';
    }

    if (returingTime.getSeconds() < 10) {
      returtingString += '0' + returingTime.getSeconds().toString();
    } else {
      returtingString += returingTime.getSeconds().toString();
    }
    return returtingString;
  }


  deleteZone(id: number){
    this.timeService.delZone(id);
  }

 
  ngAfterViewInit() {
    
    this.filteredZoneSearch = this.cityInput.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (value === '') {
          this.searchedZone = null;
        }
        return this._filter(value);
      })
    );

    
  }
  

  private _filter(value: string) : string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
      );
  }


  options = this.cities;


  GotSearch(ev){
    this.searchedZone = this.timeZoneList.find(el => el.city === ev.option.value);
  }

  ngOnDestroy() {
    clearInterval(this.detectChangesInterval);
    
  }
}
