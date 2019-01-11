import { NoteModel } from "../model/note.model";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class NotepadService {
    selectedNote = new EventEmitter<NoteModel>(); //emmiting type of NoteModel

    NOTES: NoteModel[] = [
        //this is test data, please IGNORE
        // {
        //     title: 'This is test TITLE',
        //     description: 'This is Test DESCRIPTION',
        //     createdOn: new Date(12, 15, 97)
        // },
        // {
        //     title: 'This is test TITLE2',
        //     description: 'This is Test DESCRIPTION2',
        //     createdOn: new Date(18, 19, 11)
        // },
        {
            title: localStorage.getItem('title'), // getting the title from localstorage
            description: localStorage.getItem('description'), //getting the description from localstorage
            createdOn: new Date() //created a new date
        },
    ]

    //this method is to get the notes saved in NOTES
    getNote(){
        return this.NOTES;
    }

    //this method is for adding new notes to NOTES
    addNote(note: NoteModel){
        this.NOTES.push(note);
    }
}