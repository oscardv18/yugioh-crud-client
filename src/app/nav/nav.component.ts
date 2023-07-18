import { Component } from '@angular/core';

interface RouteStruct {
  name: string;
  path: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  // links: string[] = ['Inicio', 'Cartas', 'Registro', 'Iniciar Sesion'];
  links: RouteStruct[] = [
    {
      name: 'Inicio',
      path: '/',
    },
    {
      name: 'Cartas',
      path: '/',
    },
    {
      name: 'Registro',
      path: '/',
    },
    {
      name: 'Iniciar Sesión',
      path: '/login',
    },
  ];

  constructor() {}
}
