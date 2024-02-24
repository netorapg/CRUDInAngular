import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/template/header/header.component";

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {} from '@angular/material/list';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [RouterOutlet, HeaderComponent, MatToolbarModule, FooterComponent, NavComponent, MatSidenavModule]
})
export class AppComponent {
 
}
