import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentListComponent } from '../student-list.component';

export interface mydata{
  $key:string,
  name:string,
  email:string,
  contact:number,
  address:string
}

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
   details;
  constructor( public dialogRef: MatDialogRef<StudentListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: mydata) { }

  ngOnInit() {
  }

}
