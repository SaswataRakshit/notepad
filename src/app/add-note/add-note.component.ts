import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@Angular/forms';
import { NoteModel } from '../model/note.model';
import { NotepadService } from '../service/notepad.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  @ViewChild('f') notepadForm: NgForm; //view the child HTML where f is local reference
  title: string;
  description: string;


  constructor(private router: Router, private notepadService: NotepadService) { } //injecting service and route

  ngOnInit() {
  }

  onSave() {
    const title = this.notepadForm.value.title; //assigning title value from the form
    const description = this.notepadForm.value.notes; //assigning description value from the form
    const addNote = new NoteModel(title, description, new Date()); //creating a new NoteModel
    this.notepadService.addNote(addNote); //sending the new NoteModel to service
    this.router.navigate(['/notepad']); //navigating to first page
    localStorage.setItem("title", this.notepadForm.value.title); //setting the value of title in local storage
    localStorage.setItem("description", this.notepadForm.value.notes); //setting the value of description in local storage
  }

}
