import { Component } from '@angular/core';
import { Sweet } from '../interface/template.model';
import { DialogService } from '../services/dialog.service';
import { Service } from '../services/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sweets: Sweet[] = [];
  isBouncing: boolean = true;
  constructor(private dialogService: DialogService,
    private sweetService: Service) {}

  openImageDialog(sweeet: Sweet): void {
    this.isBouncing = true;
    this.dialogService.openImageDialog(sweeet);
  }
  resetBounce(): void {
    this.isBouncing = false; // Reset the flag to allow for another bounce animation
  }
  ngOnInit(): void {
    this.sweets = this.sweetService.getProducts();
  }
  getStatusTooltip(status: string): string {
    switch (status) {
      case 'assets/green.png':
        return 'Available';
      case 'assets/yellow.png':
        return 'Yet to be reay';
      case 'assets/red.png':
        return 'Not Available';
      default:
        return ''; // Default class (no background color)
    }
  }
  
}

