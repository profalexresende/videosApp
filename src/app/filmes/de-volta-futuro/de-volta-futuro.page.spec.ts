import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeVoltaFuturoPage } from './de-volta-futuro.page';

describe('DeVoltaFuturoPage', () => {
  let component: DeVoltaFuturoPage;
  let fixture: ComponentFixture<DeVoltaFuturoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeVoltaFuturoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeVoltaFuturoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
