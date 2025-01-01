import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinEventButtonComponent } from './join-event-button.component';

describe('JoinEventButtonComponent', () => {
  let component: JoinEventButtonComponent;
  let fixture: ComponentFixture<JoinEventButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinEventButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinEventButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
