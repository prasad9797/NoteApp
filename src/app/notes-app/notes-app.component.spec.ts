import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAppComponent } from './notes-app.component';

describe('NotesAppComponent', () => {
  let component: NotesAppComponent;
  let fixture: ComponentFixture<NotesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
