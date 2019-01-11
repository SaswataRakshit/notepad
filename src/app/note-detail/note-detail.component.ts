import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NotepadService } from '../service/notepad.service';
import { NoteModel } from '../model/note.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit, OnDestroy {

  //This component is not working
  //Tried so many things, but from subscribe block, it is not taking the notes object which we are getting from notepad component. NEED TO Research more.
  
  notes: NoteModel;
  // = {title: '', description: '', createdOn: new Date()};

  subscribe: Subscription;

  constructor(private router: Router, private notepadService: NotepadService) { }

  ngOnInit() {
    this.subscribe = this.notepadService.selectedNote //subscribe the selectedNote which is emitting note object from notepad
      .subscribe(
        (note: NoteModel) => {
          //this.notes = note;
          this.display(note);
        }
      )
  }

  ngOnDestroy(){
    // this.subscribe.unsubscribe(); //trying to destroy the subscription
  }

  //this method is to get the note object from the subscribe block
  display(noteItem: NoteModel) {
    // this.notes = new NoteModel(noteItem.title,noteItem.description,noteItem.createdOn);
    this.notes = noteItem;
    // return this.notes;
  }

  //this method we can use to delete the selected note
  onDelete() {
    this.router.navigate(['/notepad'])
  }

}
