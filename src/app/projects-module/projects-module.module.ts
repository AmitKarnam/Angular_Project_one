import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsAppRoutingModule } from './projects-app-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { AddMembersComponent } from './add-members/add-members.component';




@NgModule({
  declarations: [
    ProjectsComponent,
    AddProjectComponent,
    AddMembersComponent,
    
  ],
  exports: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsAppRoutingModule,
    FormsModule
  ]
})
export class ProjectsModuleModule { }
