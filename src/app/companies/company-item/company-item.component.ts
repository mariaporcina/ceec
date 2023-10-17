import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent {
  @Input() companyId!: string;
  @Input() corporateName!: string;
  @Output() showNameEvent = new EventEmitter<MouseEvent>();

  buttonText: string = "Ver Razão Social"

  emitShowNameEvent(): void {
    if(this.buttonText.includes('Ver')) {
      this.buttonText = "Esconder Razão Social";
    } else {
      this.buttonText = "Ver Razão Social";
    }
    this.showNameEvent.emit();
  }
}
