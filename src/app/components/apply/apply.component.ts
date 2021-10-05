import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  constructor(public dialogRef: MatDialogRef<ApplyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.profile = result;
      console.log(this.profile);
    });
  }
  public alertResult(result:DialogData):void{
    alert(result);
  }

  ngOnInit(): void {
  }

}
