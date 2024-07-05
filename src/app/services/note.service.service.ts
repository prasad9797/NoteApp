import { Injectable } from '@angular/core';
import { Note } from '../note.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private notes: Note[] = []
  private noteSubject = new BehaviorSubject<Note[]>([])

  constructor() { }

  getNotes(){
    return this.noteSubject.asObservable();
  }

  addNote(title: string, description: string, id?:number){
    if(id){
      const index = this.notes.findIndex(note=> note.id===id)
      if(index!==-1){
        this.notes[index]={...this.notes[index], title, description}
      }
    }
    else{
    const newNote = {
      id: this.notes.length + 1,
      title: title,
      description: description,
    }
    this.notes.push(newNote)
  }
  this.noteSubject.next([...this.notes])

  }

  deleteNote(id: number){
    this.notes = this.notes.filter(note => note.id!==id)
    this.noteSubject.next([...this.notes])
  }
}
