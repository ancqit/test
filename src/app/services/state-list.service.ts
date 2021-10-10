import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import jsonC from '../../assets/stateList.json';
import { ApplyComponent} from '../components/apply/apply.component';

@Injectable({
  providedIn: 'root'
})
export class StateListService {
jsonData=jsonC;
 public result: any;
  verificationId: any;
  constructor(
    private http: HttpClient,
    private apply:ApplyComponent
    ) {
    
}
public  setid(id:any){
  this.verificationId=id;
}
public id(){
  return this.verificationId;
}
public getJSON(): Observable<any> {
    return this.jsonData;
}
public getUserDetails():any{
  return this.result;
}
public setUserDetails(result:any):void{
  this.result= result;
}
public alert(){
  this.apply.alertResult();
}

}
