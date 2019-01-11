import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotepadComponent } from './notepad/notepad.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
  {path: 'notepad', component: NotepadComponent}, //route to notepad component
  {path: 'adding', component: AddNoteComponent}, //route to add note component
  {path: 'details', component: NoteDetailComponent}, //route to details component
  { path: '', redirectTo:'/notepad', pathMatch:'full'} //default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
