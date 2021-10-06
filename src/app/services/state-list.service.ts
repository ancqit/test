import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import jsonC from '../../assets/stateList.json'

@Injectable({
  providedIn: 'root'
})
export class StateListService {
jsonData=jsonC;
  constructor(private http: HttpClient) {
    
}

public getJSON(): Observable<any> {
    return this.jsonData;
}
}
