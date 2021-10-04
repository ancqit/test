import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-mission-statement',
  templateUrl: './mission-statement.component.html',
  styleUrls: ['./mission-statement.component.scss']
})
export class MissionStatementComponent implements OnInit {
public mission:string|undefined;
safeURL;
  videoURl: string;
constructor(private _sanitizer: DomSanitizer){
  this.videoURl= "https://www.youtube.com/embed/wF_B_aagLfI?list=RDwF_B_aagLfI";
  this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURl);
}
  ngOnInit(): void {
    this.mission= "Mission statement goes here!";
  }

}
