import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechieDiariesListComponent } from './techie-diaries-list.component';

describe('TechieDiariesListComponent', () => {
  let component: TechieDiariesListComponent;
  let fixture: ComponentFixture<TechieDiariesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechieDiariesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechieDiariesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
