import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
@Input() public title:String | undefined;
public toggle:boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.toggle=true;
  }

}
