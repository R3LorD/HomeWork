import { Component, OnInit } from '@angular/core';
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
  
  constructor(private timeService: ZoneSerService) { }
  
  timeZoneList = new Array<TimeZone>();
  cityInput = new FormControl();
  filteredZoneSearch: Observable<string[]>;
  cities: string[] = [];
  searchedZone: TimeZone = null;


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
}
