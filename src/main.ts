import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { NotesAppComponent } from './app/notes-app/notes-app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotesAppComponent,CommonModule],
  template: `
  <app-notes-app/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
