/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Course2ListComponent } from './Course2List.component';

describe('Course2ListComponent', () => {
  let component: Course2ListComponent;
  let fixture: ComponentFixture<Course2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Course2ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Course2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
