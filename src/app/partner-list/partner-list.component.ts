import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-partner-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partner-list.component.html',
  styleUrl: './partner-list.component.css'
})
export class PartnerListComponent {
  generos: string[] = ['H', 'M'];

  partners: {name: string, gender: string} []= [];

  constructor (private partnerService: PartnerService){}

  ngOnInit(): void {
    this.partners = this.partnerService.getPartner();
  }

  deletePartner(index: number){
    this.partnerService.deletePartner(index);
  }
}