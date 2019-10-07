import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../shared/student-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewDetailsComponent } from './view-details/view-details.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public studentArray;
  showDeleteMsg:boolean;
  searchText:string;
  public dataSource;
  displayedColumns = ['name','email','contact','address','editDelete'];
  constructor(public obj:StudentServiceService,private router:Router,public dialog:MatDialog) { }

  ngOnInit() {
    this.obj.getStudents().subscribe(data=>{
        
       this.studentArray=data.map(item=>{
        return {
          $key: item.key,
          ...item.payload.val()
        };
       })
       this.dataSource = new MatTableDataSource(this.studentArray);   
    })
  }

  onDelete($key:string){
    if(confirm("Are you sure you want to delete this data")){
      this.obj.deleteData($key);
      this.showDeleteMsg=true;
      setTimeout(() => {
        this.showDeleteMsg=false;
      }, 3000);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openModel(value){
   const dialogRF = this.dialog.open(ViewDetailsComponent,{data:{
     name:value.name,email:value.email,contact:value.contact,address:value.address
   }});
  }
}
