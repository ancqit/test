import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ApplyComponent } from '../apply/apply.component';

export interface DialogData {
  name: string;
  email: string;
  phoneNo:Number;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  animal: string | undefined;
  name: string|undefined;
  constructor(public dialog: MatDialog,public apply:ApplyComponent) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ApplyComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      this.pass(result);
      console.log(this.animal);
    });
  }
  pass(result:DialogData){
    alert(JSON.stringify(result));
    //this.apply.alertResult(result);
  }


}
