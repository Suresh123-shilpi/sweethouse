import { Injectable } from '@angular/core';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { Sweet } from '../interface/template.model';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

   imageUrl: string = '';

  constructor(private dialog: MatDialog) {}

  openImageDialog(sweet: Sweet): void {
    this.dialog.open(ImageDialogComponent, {
      width: '40vw',
      height: 'auto',
      data:{sweet}
    });
  }
  
  closeImageDialog(): void {
    this.dialog.closeAll();
  }
}
