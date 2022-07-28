import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumchildComponent } from './numchild.component';

describe('NumchildComponent', () => {
  let component: NumchildComponent;
  let fixture: ComponentFixture<NumchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
