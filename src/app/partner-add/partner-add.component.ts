import { Component } from '@angular/core';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-partner-add',
  standalone: true,
  imports: [],
  templateUrl: './partner-add.component.html',
  styleUrl: './partner-add.component.css'
})
export class PartnerAddComponent {
  constructor (private partnerService: PartnerService){}

  addPartner(name: string, gender: string){
    this.partnerService.addPartner({name, gender});
  }
}
