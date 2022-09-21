import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { projectSchema } from '../projects-module/projects'
import { members } from '../projects-module/members';


@Injectable({
  providedIn: 'root'
})
export class GetProjectServiceService {

  private projectCollections: AngularFirestoreCollection<projectSchema>;
  private projectDoc: AngularFirestoreDocument<projectSchema> | undefined;
  private projects: Observable<projectSchema[]>
  private members!: Observable<members[]>;

  constructor(private firestore: AngularFirestore) {
    this.projectCollections = firestore.collection<projectSchema>('projects');
    this.projects = firestore.collection<projectSchema>('projects').valueChanges({idField: 'id'});
    
   }

  getProjects() {
   return this.projects;
  }

  adddProject(project: projectSchema) {
      this.projectCollections.add(project);
   }

  deleteProject(project: projectSchema) {
    this.projectDoc = this.firestore.doc('projects/'+project.id)
    this.projectDoc.delete()
  }

  updateProject(project: projectSchema) {
    this.firestore.doc('projects.id'+project.id).update(project);
  }

  getMembers(id:projectSchema['id']) {
      this.members = this.firestore.collection<members>('projects/'+id+'/members').valueChanges({idField:'id'})
      return this.members; 
  }



}
