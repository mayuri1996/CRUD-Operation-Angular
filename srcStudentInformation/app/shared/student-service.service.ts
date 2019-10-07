import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Ilist } from '../Ilist';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  studentDetails:FormGroup;
  studentList: AngularFireList<any>;

  constructor(private firebase:AngularFireDatabase,private _formBuilder:FormBuilder) {
    this.getStudents();
    this.studentDetails = this._formBuilder.group({
      '$key':[null],
      'name': ['',[Validators.required]],
      'email': ['',[Validators.required,Validators.email]],
      'contact': ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      'address' : ['',[Validators.required]]
    })
   }

   insertStudent(student){
     this.studentList.push({
       name:student.name,
       email:student.email,
       contact:student.contact,
       address:student.address
     });
  }

  getStudents()
  {
    this.studentList = this.firebase.list('students');
    return this.studentList.snapshotChanges();
  }

  editData(student){
     this.studentDetails.setValue(student);
   }

  updateStudent(student){
    this.studentList.update(student.$key,{
      name:student.name,
      email:student.email,
      contact:student.contact,
      address:student.address
    })
  }

  deleteData($key:string){
    this.studentList.remove($key);
  }

}

