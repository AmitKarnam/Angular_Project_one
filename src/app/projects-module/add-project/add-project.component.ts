import { Component, OnInit ,OnDestroy, Injectable} from '@angular/core';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';
import { projectSchema } from '../projects';
import { Location } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { members } from '../members';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})


export class AddProjectComponent implements OnInit,OnDestroy {

  project: projectSchema;
  project_members: members[];
  memberFlag:Boolean;
  static id: projectSchema['id']; 

  notNullFormControl = new FormControl('',[Validators.required,Validators.nullValidator]);
  selectFormControl = new FormControl('', Validators.required);
  matcher = new MyErrorStateMatcher();

  constructor(private location: Location, private getProjectService: GetProjectServiceService, private projectComponent: ProjectsComponent) {}

  ngOnInit(): void {
      this.memberFlag=ProjectsComponent.updateFlag;
    if(ProjectsComponent.updateFlag === true){
        AddProjectComponent.id == ProjectsComponent.projectEdit.id
        this.project = ProjectsComponent.projectEdit;
    }
    else{
      this.project ={}

    }
    if(this.project){
      this.getProjectService.getMembers(this.project.id).subscribe(res=>{
        this.project_members=res;
      })
  }
}
  
  ngOnDestroy(): void {
    ProjectsComponent.projectEdit={}
    ProjectsComponent.updateFlag = false;
  }

  async onSubmit() {
      if( ProjectsComponent.updateFlag===false ){
        console.log(this.project)
        await
        this.getProjectService.adddProject(this.project).then(() => alert('Success')).catch(()=>alert('Error Addind Project'))
        this.location.back()
        this.project={}
      }
      else if( ProjectsComponent.updateFlag===true){
    
        await
        this.getProjectService.updateProject(this.project).then(() => alert('Success')).catch(()=>alert('Error updating Project'))
        this.project={}
       // this.location.back();
        ProjectsComponent.updateFlag=false;
      }
    }
  }