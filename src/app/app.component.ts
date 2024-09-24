import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { PartnerAddComponent } from "./partner-add/partner-add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PartnerListComponent, PartnerAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'manager';
}
