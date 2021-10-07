import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StateListService } from '../../services/state-list.service';
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
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
 
 
profile:DialogData|undefined;
public stateList : any;
  private horizontalPositionAlert: any='center';
  private verticalPositionAlert: any='top';
  constructor(public dialogRef: MatDialogRef<ApplyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public statelist:StateListService,
    private _snackBar: MatSnackBar) {}

  onNoClick(): void {
    
      this.dialogRef.close();
    
   //this.alertResult();
  }
  

  ngOnInit(): void {
    console.log('hello');
    let dummy= this.statelist.getJSON();
    console.log(dummy);
    this.stateList= dummy;
  }
    public alertResult(){
    // alert('');
    
     
   }

}
