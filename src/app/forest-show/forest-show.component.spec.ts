import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestShowComponent } from './forest-show.component';

describe('ForestShowComponent', () => {
  let component: ForestShowComponent;
  let fixture: ComponentFixture<ForestShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
