import { Component, OnInit } from '@angular/core';
import { ZoneSerService } from 'src/app/service/zone-ser.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent implements OnInit {

  constructor(private timeService: ZoneSerService) { }

  ngOnInit() {
  }

  AddNewZoneGroup: FormGroup = new FormGroup({
    offset: new FormControl('', [
      Validators.required,
      Validators.pattern('[-+]((1[0-2])|([0-9]))')
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ])
  });

  addZone(){
    this.timeService.addNewZone(this.AddNewZoneGroup.controls['city'].value,
    this.AddNewZoneGroup.controls['offset'].value);
  }
}
