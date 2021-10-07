import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { StateListService} from '../../services/state-list.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any ;
  thirdFormGroup: FormGroup|any;
  fourthFormGroup: FormGroup|any;
  @Input() public data:any | undefined;
   public countryJson:any | undefined;
   countS:any;
  stepperOrientation: Observable<StepperOrientation>;
  statesL: any;
  constructor(
    private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private stateService:StateListService
    ) {
      this.countryJson=this.stateService.getJSON();
    
      console.log(this.countryJson);
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
    .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
}
   

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      countryOfOrigin:['',Validators.required],
      state:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup= this._formBuilder.group({
     thirdCtrl:['',Validators.required] 
    })
    this.fourthFormGroup= this._formBuilder.group({
      fourthCtrl:['',Validators.required] 
     })
     
  }
  value(){
    this.data.name= this.firstFormGroup.value.name;
    this.data.countryOfOrigin = this.firstFormGroup.value.countryOfOrigin;
    console.log(this.firstFormGroup.value.firstCtrl);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);
    console.log(this.fourthFormGroup.value);
    
  }
  update($event:any){
    //this.statesL = $event;
    for (let i = 0; i < this.countryJson.countries.length; i++){
        if($event === this.countryJson.countries[i].country){
          this.statesL= this.countryJson.countries[i].states;
        }
    }
    console.log(this.statesL);
  }
  

}
