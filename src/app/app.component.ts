import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './products/components/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo Angular 18';
  enabled: boolean = false;

  courses: string[] = ['Angular', 'React', 'Spriong Boot'];

  setEnabled(): void {
    this.enabled = this.enabled ? false : true;
    console.log('hemos hecho click en setEnabled');
  }
}
