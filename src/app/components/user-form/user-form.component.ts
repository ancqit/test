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

  isLinear = false;
  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any ;
  thirdFormGroup: FormGroup|any;
  fourthFormGroup: FormGroup|any;
  @Input() public data:any | undefined;
   public countryJson:any | undefined;
   countS:any;
  stepperOrientation: Observable<StepperOrientation>;
  statesL: any;
  public countryInterest:string[]=['United Kingdom','Ireland','Australia','United States Of America', 'Canada'];
  public qualifications:string[]=['1-Year Post-Secondary Certificate','2-Year Undergraduate Diploma','3-Year Undergraduate Advanced Diploma',
                                  '3-Year Bachelors Degree','4-Year Bachelors Degree','Postgraduate Certificate/Diploma','Masters Degree','Doctoral Degree (Phd,M.D...)'];
  public gradScale:Number[]=[4,5,7,10,20];
  public examEnglisgType:string[]=['I do not know about this!','I will provide this later.','TOEFL','IELTS','Duolingo English Test','PTE'];
  toeflScores: boolean|undefined=false;
  pteScores: boolean|undefined=false;
  duolingoScores: boolean|undefined=false;
  ilets: boolean|undefined=false;
  gmatScores: boolean=false;
  greScore: boolean=false;
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
      //name: ['', Validators.required],
      countryOfOrigin:['',Validators.required],
      state:['',Validators.required],
      interstCountry:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      highestQualification: ['', Validators.required],
      gradingScale:['',Validators.required],
      averageGrade:['',Validators.required]
    });
    this.thirdFormGroup= this._formBuilder.group({
      englishExamType:['',Validators.required],
      listening:['',Validators.required],
      reading:['',Validators.required],
      writing:['',Validators.required],
      speaking:['',Validators.required],
      overall:['',Validators.required],
      hasGreScore:'',
      verbalGreScore:['',Validators.required],
      verbalGreRank:['',Validators.required],
      quantGreScore:['',Validators.required],
      quantGreRank:['',Validators.required],
      writingGreScore:['',Validators.required],       
      writingGreRank:['',Validators.required],
      hasGmatScore:'', 
      verbalGmatScore:['',Validators.required],
      verbalGmatRank:['',Validators.required],
      quantGmatScore:['',Validators.required],
      quantGmatRank:['',Validators.required],
      writingGmatScore:['',Validators.required],       
      writingGmatRank:['',Validators.required],
      totalGmatScore:['',Validators.required],       
      totalGmatRank:['',Validators.required],
    })
    this.fourthFormGroup= this._formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phoneNumber:['',Validators.required]  
     })
    
     this.thirdFormGroup.patchValue({
      hasGreScore:false,
      hasGmatScore:false
    }) 
  }
  value(){
    this.data.hasGmatScore=this.thirdFormGroup.value.hasGmatScore;
    this.data.verbalGmatScore=this.thirdFormGroup.value.verbalGmatScore;
    this.data.verbalGmatRank=this.thirdFormGroup.value.verbalGmatRank;
    this.data.quantGmatScore=this.thirdFormGroup.value.quantGmatScore;
    this.data.quantGmatRank=this.thirdFormGroup.value.quantGmatRank;
    this.data.writingGmatScore = this.thirdFormGroup.value.writingGmatScore;
    this.data.writingGmatRank = this.thirdFormGroup.value.writingGmatRank;
    this.data.totalGmatScore =this.thirdFormGroup.value.totalGmatScore;
    this.data.totalGmatRank=this.thirdFormGroup.value.totalGmatRank;
    this.data.name=this.fourthFormGroup.value.name;
    this.data.email=this.fourthFormGroup.value.email;
    this.data.phoneNumber=this.fourthFormGroup.value.phoneNumber;
    this.data.verbalGreScore=this.thirdFormGroup.value.verbalGreScore;
    this.data.verbalGreRank=this.thirdFormGroup.value.verbalGreRank;
    this.data.quantGreScore=this.thirdFormGroup.value.quantGreScore;
    this.data.quantGreRank=this.thirdFormGroup.value.quantGreRank;
    this.data.writingGreScore = this.thirdFormGroup.value.writingGreScore;
    this.data.writingGreRank =this.thirdFormGroup.value.writingGreRank;
    this.data.name= this.firstFormGroup.value.name;
    this.data.countryOfOrigin = this.firstFormGroup.value.countryOfOrigin;
    this.data.state= this.firstFormGroup.value.state;
    this.data.interestCountry = this.firstFormGroup.value.interstCountry;
    this.data.highestQualification=this.secondFormGroup.value.highestQualification;
    this.data.gradingScale=this.secondFormGroup.value.gradingScale;
    this.data.averageGrade=this.secondFormGroup.value.averageGrade;
    this.data.englishExamType=this.thirdFormGroup.value.englishExamType;
    this.data.listening=this.thirdFormGroup.value.listening;
    this.data.reading=this.thirdFormGroup.value.reading;
    this.data.writing=this.thirdFormGroup.value.writing;
    this.data.speaking=this.thirdFormGroup.value.speaking;
    this.data.overall=this.thirdFormGroup.value.overall;
    this.data.hasGreScore=this.thirdFormGroup.value.hasGreScore;
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
  updateExamScores($event:any){
    if ($event === 'TOEFL' || $event === 'IELTS' ){
      this.thirdFormGroup.patchValue({
        overall: 'toefl scores dont have Overall', 
        // formControlName2: myValue2 (can be omitted)
      });
      this.toeflScores =true;
      this.pteScores=false;
     } else if ($event === 'PTE'){ 
      this.thirdFormGroup.patchValue({
        listening: undefined, 
        reading: undefined,
        writing: undefined,
        speaking: undefined,
        overall: undefined
        // formControlName2: myValue2 (can be omitted)
      });
      this.toeflScores=true;
      this.pteScores = true;
      
    }else if($event === 'Duolingo English Test'){
      this.thirdFormGroup.patchValue({
        listening: 'Duolingo scores dont have listening', 
        reading: 'Duolingo scores dont have reading',
        writing: 'Duolingo scores dont have writing',
        speaking: 'Duolingo scores dont have speaking',
        overall: undefined
        // formControlName2: myValue2 (can be omitted)
      });
      this.pteScores=true;
      this.toeflScores=false;
    }else if($event === 'I do not know about this!' ){
      this.thirdFormGroup.patchValue({
        listening: 'I do not know about this!', 
        reading: 'I do not know about this!',
        writing: 'I do not know about this!',
        speaking: 'I do not know about this!',
        overall: undefined
        // formControlName2: myValue2 (can be omitted)
      });

    }else if($event === 'I will provide this later.'){
      this.thirdFormGroup.patchValue({
        listening:'I will provide this later.', 
        reading: 'I will provide this later.',
        writing: 'I will provide this later.',
        speaking: 'I will provide this later.',
        overall: 'I will provide this later.'
        // formControlName2: myValue2 (can be omitted)
      });
    }
  }
 public showGreScores(res:any):void{
    if(res.checked){
    this.greScore=true;
    
  }else {
    this.greScore=false;   
  }

   
}
showGmatScores(res:any){
  if(res.checked){
    this.gmatScores=true;
  }else {
    this.gmatScores=false;    
  }
}
}