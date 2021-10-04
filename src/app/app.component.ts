import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:String|undefined;
  ngOninit(): any{
    
  this.title = 'applynext-website is here!  ';
  }
}
