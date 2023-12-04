import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcaoComponent } from './modal-acao.component';

describe('ModalAcaoComponent', () => {
  let component: ModalAcaoComponent;
  let fixture: ComponentFixture<ModalAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
