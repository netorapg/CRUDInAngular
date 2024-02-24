import { Component } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavContainer, MatSidenav, MatNavList],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
