import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologosListaComponent } from './psicologos-lista.component';

describe('PsicologosListaComponent', () => {
  let component: PsicologosListaComponent;
  let fixture: ComponentFixture<PsicologosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicologosListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsicologosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
