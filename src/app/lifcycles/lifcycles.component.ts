import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
   } from '@angular/core';

@Component({
  selector: 'app-lifcycles',
  templateUrl: './lifcycles.component.html',
  styleUrls: ['./lifcycles.component.css']
})
export class LifcyclesComponent implements OnInit, OnChanges, DoCheck,
AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  constructor() { }

  ngOnChanges(){
    console.log('ngOnchanges')
  }

  ngOnInit() {
    console.log('ngoninit');
  }

  /* It will be triggred for every change*/
  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  /* It will be triggred for every change*/
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  /* It will be triggred for every change*/
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
