import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ZoneSerService } from 'src/app/service/zone-ser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-zone',
  templateUrl: './edit-zone.component.html',
  styleUrls: ['./edit-zone.component.css']
})
export class EditZoneComponent implements OnInit {

  constructor(private timeService: ZoneSerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  timeZoneId: number = parseInt(this.route.snapshot.paramMap.get('id'));
  
  EditZoneGroup: FormGroup = new FormGroup({
    offset: new FormControl('', [
      Validators.required,
      Validators.pattern('[-+]((1[0-2])|([0-9]))')
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ])
  });

  updateZone(){
    this.timeService.updateZone(this.timeZoneId, this.EditZoneGroup.controls['city'].value,
    this.EditZoneGroup.controls['offset'].value);

    this.router.navigate(['']);
  }
}
