import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})



export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() name:string;

  constructor() { }

  ngOnChanges(){
    console.log('ngOnChanges: Hello ' + name);
    
  }

  ngOnInit() {
    console.log('ngOnInit: Done!');
  }

  ngDoCheck(){
    console.log('ngDoCheck: Done!');
    
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit: Done!');
    
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked: Done!');
    
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit: Done!');
    
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked: Done!');
    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy: Done!');
    
  }
}
