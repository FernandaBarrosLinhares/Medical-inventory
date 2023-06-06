import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioPacienteComponent } from './prontuario-paciente.component';

describe('ProntuarioPacienteComponent', () => {
  let component: ProntuarioPacienteComponent;
  let fixture: ComponentFixture<ProntuarioPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProntuarioPacienteComponent]
    });
    fixture = TestBed.createComponent(ProntuarioPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
