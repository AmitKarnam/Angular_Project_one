import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddMembersComponent } from './add-members/add-members.component';

const routes: Routes = [
  {
    path: "", component: ProjectsComponent
  },
  {
    path: "add-project",component: AddProjectComponent
  },
  {
    path: "add-members",component: AddMembersComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class ProjectsAppRoutingModule { }
