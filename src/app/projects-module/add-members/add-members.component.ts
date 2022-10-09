import { Component, Injectable, OnInit } from '@angular/core';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';
import { Location } from '@angular/common';
import { members } from '../members';
import { projectSchema } from '../projects';
import { ProjectsComponent } from '../projects/projects.component';
import { AddProjectComponent } from '../add-project/add-project.component';
import { Router } from '@angular/router';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})

export class AddMembersComponent implements OnInit {

  member_data: members;
  project_id: projectSchema['id'];

  notNullFormControl = new FormControl('',[Validators.required,Validators.nullValidator]);
  emailFormControl = new FormControl('',[Validators.required,Validators.email])
  matcher = new MyErrorStateMatcher();
  
  

  constructor(private location: Location, private getProjectService: GetProjectServiceService ) { }

  ngOnInit(): void {
    this.project_id=AddProjectComponent.id
    this.member_data = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: 0,
      hoursPerWeek: 0,
    }
  }

  async onSubmit() {
  
    console.log(this.member_data)
   
    console.log(this.project_id)
    
    await
    
    this.getProjectService.addMembers(this.project_id,this.member_data)
    
    this.member_data = {}
  }

}
