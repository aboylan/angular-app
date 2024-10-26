import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo Angular 18';
  enabled: boolean = false;

  setEnabled(): void{
    this.enabled = this.enabled ? false : true;
    console.log('hemos hecho click en setEnabled');
  }
}
