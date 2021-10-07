import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ApplyComponent } from '../apply/apply.component';
import {StateListService} from '../../services/state-list.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

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
  animal: DialogData | undefined;
  name: string|undefined;
  private horizontalPositionAlert: any='center';
  private verticalPositionAlert: any='top';
  constructor(public dialog: MatDialog,public apply:ApplyComponent,public stateservice:StateListService, private _snackBar: MatSnackBar) { }

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
      this.stateservice.setUserDetails(result);
      this.pass();      
      console.log(this.animal);
    });
    
  }
  pass(){
   // alert(JSON.stringify(result));
   // this.stateservice.alert();
   if (this.stateservice.result === undefined){
    this._snackBar.open('Allow us to work for you!', 'Provide Details', {
      horizontalPosition: this.horizontalPositionAlert,
      verticalPosition: this.verticalPositionAlert,
      duration:2000,
    });
    
  }
  else{
    this._snackBar.open('A counseller will cotact you', 'Stay safe', {
      horizontalPosition: this.horizontalPositionAlert,
      verticalPosition: this.verticalPositionAlert,
      duration:2000,
    });
  }
  }
}


