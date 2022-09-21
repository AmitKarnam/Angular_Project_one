import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsAppRoutingModule } from './projects-app-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProjectsComponent,
    AddProjectComponent,
    
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
