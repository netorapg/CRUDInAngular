import { Component } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatSidenavContent } from '@angular/material/sidenav';
import { HomeComponent } from "../../../views/home/home.component";

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [MatSidenavContainer, MatSidenav, MatNavList, MatSidenavContent, HomeComponent]
})
export class NavComponent {

}
