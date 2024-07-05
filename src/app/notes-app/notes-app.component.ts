import { Component, ElementRef, ViewChild } from '@angular/core';
import { NoteServiceService } from '../services/note.service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Note } from '../note.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-app',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './notes-app.component.html',
  styleUrl: './notes-app.component.css'
})
export class NotesAppComponent {

  notes$!: Observable<Note[]>;
  newNoteForm!: FormGroup;
  editNoteForm!: FormGroup;
  isButtonActive: boolean = false
  selectedNote: number | null = null
  @ViewChild('title') inputTitle!: ElementRef;

  constructor(private noteService: NoteServiceService, private fb: FormBuilder){
    this.notes$ = this.noteService.getNotes();
    this.newNoteForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit(){
    this.newNoteForm.get('title')?.valueChanges.subscribe(value=>{
      this.isButtonActive = !!value
    })
    this.newNoteForm.get('description')?.valueChanges.subscribe(value=>{
      this.isButtonActive = !!value
    })
  }

  focusForm(){
    this.inputTitle.nativeElement.focus()
  }

  addNote(){
    if(this.newNoteForm.valid){
      const {title, description} = this.newNoteForm.value
      if(this.selectedNote!==null)  this.noteService.addNote(title, description, this.selectedNote);
      else this.noteService.addNote(title, description);
      this.newNoteForm.reset()
    }
  }

  editNote(note: Note){
    const {id, title, description} = note
    this.selectedNote = id
    this.newNoteForm.patchValue({
      id: id,
      title: title,
      description: description
    })
  }

  revert(){

  }

  deleteNote(id: number){
    this.noteService.deleteNote(id)
  }
}
