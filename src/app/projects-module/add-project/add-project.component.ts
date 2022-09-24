import { Component, OnInit ,OnDestroy} from '@angular/core';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';
import { projectSchema } from '../projects';
import { Location } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { members } from '../members';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit,OnDestroy {

  project: projectSchema;
  project_members: members[];
  memberFlag:Boolean;


  constructor(private location: Location, private getProjectService: GetProjectServiceService, private projectComponent: ProjectsComponent) {}

  ngOnInit(): void {
    this.memberFlag=ProjectsComponent.updateFlag;
    if(ProjectsComponent.updateFlag === true){
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
        this.getProjectService.adddProject(this.project).then(() => alert('Success')).catch(()=>alert('Error Addind Project'))
       this.project={}
        this.location.back();
        ProjectsComponent.updateFlag=false;
      }
    }
  }