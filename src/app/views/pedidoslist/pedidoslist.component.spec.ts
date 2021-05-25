import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoslistComponent } from './pedidoslist.component';

describe('PedidoslistComponent', () => {
  let component: PedidoslistComponent;
  let fixture: ComponentFixture<PedidoslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
