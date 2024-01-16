import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateGuestListComponent } from './generate-guest-list.component';

describe('GenerateGuestListComponent', () => {
  let component: GenerateGuestListComponent;
  let fixture: ComponentFixture<GenerateGuestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateGuestListComponent]
    });
    fixture = TestBed.createComponent(GenerateGuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
