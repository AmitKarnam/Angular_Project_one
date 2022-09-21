import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';
import { projectSchema } from '../projects';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


@Injectable({providedIn:'root'})
export class ProjectsComponent implements OnInit {


projects: projectSchema[] = [];
static updateFlag: boolean = false;
static projectEdit: projectSchema;


  constructor(private getProjectServiceService: GetProjectServiceService,private location: Location,private router: Router) { }

  ngOnInit(): void {
    this.getProjectServiceService.getProjects().subscribe((res) => {
      this.projects = res;

    })
  }

  delete(project:projectSchema){
    if(confirm("Are you sure you want to delete the project? This operation cannot be undone!")){
      this.getProjectServiceService.deleteProject(project)
    }
}

update(project:projectSchema){
  ProjectsComponent.updateFlag=true
  ProjectsComponent.projectEdit=project
  this.router.navigate(['/projects/add-project'])
}

  back() {
    this.location.back();
  }

}
