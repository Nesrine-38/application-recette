import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutRecettePage } from './ajout-recette.page';

describe('AjoutRecettePage', () => {
  let component: AjoutRecettePage;
  let fixture: ComponentFixture<AjoutRecettePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutRecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
