import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentServiceService } from '../shared/student-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  showSuccessMessage:boolean;
  public details;
  load = false;
  constructor(public obj:StudentServiceService,private _location:Location) {
   }

  ngOnInit() {
  }
  
  get f(){return this.obj.studentDetails.controls}

  onSubmit(){
    
     if(this.obj.studentDetails.get('$key').value==null)
     {
      this.obj.insertStudent(this.obj.studentDetails.value);
      this.load=true;
     }
     else{
      this.obj.updateStudent(this.obj.studentDetails.value);
      this.load=true;
     }

     this.obj.studentDetails.reset();
     this.showSuccessMessage = true;
     setTimeout(() =>{ this.showSuccessMessage = false;
      this.load=false;}, 3000);
  }

}
