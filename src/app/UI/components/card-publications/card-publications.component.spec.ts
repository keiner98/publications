import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPublicationsComponent } from './card-publications.component';

describe('CardPublicationsComponent', () => {
  let component: CardPublicationsComponent;
  let fixture: ComponentFixture<CardPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
