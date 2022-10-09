import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsAppRoutingModule } from './projects-app-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMembersComponent } from './add-members/add-members.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";


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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
    
    
  ]
})
export class ProjectsModuleModule { }
