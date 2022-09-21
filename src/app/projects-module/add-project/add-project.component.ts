import { Component, OnInit ,OnDestroy} from '@angular/core';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';
import { projectSchema } from '../projects';
import { Location } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit,OnDestroy {

  project!: projectSchema;


  constructor(private location: Location, private getProjectService: GetProjectServiceService, private projectComponent: ProjectsComponent) {}

  ngOnInit(): void {
    if(ProjectsComponent.updateFlag === true){
        this.project = ProjectsComponent.projectEdit;
    }
    else{
      this.project ={}
    }
  }
  ngOnDestroy(): void {
    ProjectsComponent.projectEdit={}
  }

  onSubmit() {
      if( ProjectsComponent.updateFlag===false ){
        this.getProjectService.adddProject(this.project);
       this.project={}
        this.location.back();
      }
      else if( ProjectsComponent.updateFlag===true){
        this.getProjectService.updateProject(this.project);
       this.project={}
        this.location.back();
      }
    }
  }