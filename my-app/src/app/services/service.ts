import { Injectable } from '@angular/core';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { Sweet } from '../interface/template.model';
@Injectable({
  providedIn: 'root'
})
export class Service {
    sweets: Sweet[] = [
        {
          id: 1,
          name: 'Chhena',
          description: 'A delicious assortment of chocolate truffles.',
          imageUrl: 'assets/chhena.jpg',
          status : 'assets/green.png'
        },
        {
          id: 2,
          name: 'Gulab Jamun',
          description: 'Fresh fruit tarts with a buttery crust.',
          imageUrl: 'assets/gulab jamun.jpg',
          status : 'assets/yellow.png'
        },
        {
          id: 3,
          name: 'Kaju Katli',
          description: 'Fresh fruit tarts with a buttery crust.',
          imageUrl: 'assets/kaju katli.webp',
          status : 'assets/green.png'
        },
        {
          id: 4,
          name: 'Mix Sweet',
          description: 'Fresh fruit tarts with a buttery crust.',
          imageUrl: 'assets/mix sweet.avif',
          status : 'assets/red.png'
        },
        {
          id: 5,
          name: 'Mix Sweet',
          description: 'Fresh fruit tarts with a buttery crust.',
          imageUrl: 'assets/mix sweet.jpg',
          status : 'assets/green.png'
        },
        {
          id: 6,
          name: 'Chhena',
          description: 'Fresh fruit tarts with a buttery crust.',
          imageUrl: 'assets/chhena.jpg',
          status : 'assets/yellow.png'
        },
        {
          id: 7,
          name: 'Gulab Jamun',
          description: 'Fresh fruit tarts with a buttery crust.',
          imageUrl: 'assets/gulab jamun.jpg',
          status : 'assets/red.png'
        },
        {
          id: 8,
          name: 'Kaju Katli',
          description: 'Fresh fruit tarts with a buttery crust.',
          imageUrl: 'assets/kaju katli.webp',
          status : 'assets/green.png'
        },
        {
          id: 9,
          name: 'Mix Sweet',
          description: 'Fresh fruit tarts with a buttery crust.',
          imageUrl: 'assets/mix sweet.jpg',
          status : 'assets/red.png'
        },
        {
          id: 10,
          name: 'Mix Sweet',
          description: 'Fresh fruit tarts with a buttery crust.',
          imageUrl: 'assets/mix sweet.avif',
          status : 'assets/yellow.png'
        },
        // Add more sweet objects as needed
      ];
    

  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    console.log("name ");
  }
  getProducts(){
    return this.sweets;
  }

}



