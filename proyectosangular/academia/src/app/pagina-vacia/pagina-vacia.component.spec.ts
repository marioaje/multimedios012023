import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVaciaComponent } from './pagina-vacia.component';

describe('PaginaVaciaComponent', () => {
  let component: PaginaVaciaComponent;
  let fixture: ComponentFixture<PaginaVaciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaVaciaComponent]
    });
    fixture = TestBed.createComponent(PaginaVaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
