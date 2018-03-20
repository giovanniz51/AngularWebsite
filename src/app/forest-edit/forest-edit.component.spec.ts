import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestEditComponent } from './forest-edit.component';

describe('ForestEditComponent', () => {
  let component: ForestEditComponent;
  let fixture: ComponentFixture<ForestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
