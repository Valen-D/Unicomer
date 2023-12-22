import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTarjetaComponent } from './table-tarjeta.component';

describe('TableTarjetaComponent', () => {
  let component: TableTarjetaComponent;
  let fixture: ComponentFixture<TableTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableTarjetaComponent]
    });
    fixture = TestBed.createComponent(TableTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
