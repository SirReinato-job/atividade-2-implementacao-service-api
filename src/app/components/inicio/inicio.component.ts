import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarrosselComponent } from '../carrossel/carrossel.component';

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule, MatGridListModule, CarrosselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {}
