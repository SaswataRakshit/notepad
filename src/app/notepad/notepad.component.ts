import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotepadService } from '../service/notepad.service';
import { NoteModel } from '../model/note.model';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {
  isDesc: boolean = false; //declaring a boolean property
  column: string = 'createdOn'; //declaring a string

  noteItems: NoteModel[]; //declaring noteItems

  constructor(private router: Router, private notepadService: NotepadService) { } //injecting service and route

  ngOnInit() {
    this.noteItems = this.notepadService.getNote(); //getting noteItems array from service
  }

  onClick() {
    this.router.navigate(['/adding']); //routing after clicking on Add note
  }

  //this is sort method
  sort(property){
    this.isDesc=!this.isDesc; //change the direction
    this.column=property; //Change the sort column name to currently clicked time
    let direction = this.isDesc ? 1 : -1;

    //using sort method array
    this.noteItems.sort((a, b) => {
      if(a[property] < b[property]){
          return -1 * direction;
      }
      else if( a[property] > b[property]){
          return 1 * direction;
      }
      else{
          return 0;
      }
  });
  }

  //this method is for emitting selected notes to note details page
  onSelect(note: NoteModel){
    this.notepadService.selectedNote.emit(note);
    this.router.navigate(['/details'])
  }

}
