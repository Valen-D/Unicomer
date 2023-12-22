import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private router: Router) {}

  menuabirto = false;

  alterarEstadoMenu() {
    this.menuabirto = !this.menuabirto
  }

  fecharMenu() {
    this.menuabirto = false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login'])
  }
}
