import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent {
  imageUrl: string | undefined | null; // Declare a property to store the imageUrl
  name : string | undefined | null;
  description : string | undefined | null;
  status : string | undefined | null;

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Inject MAT_DIALOG_DATA
  ) {
    this.imageUrl = data.sweet.imageUrl; // Assign the imageUrl from the injected data
    this.name = data.sweet.name;
    this.description = data.sweet.description;
    this.status = data.sweet.status;
  }
  ngOnInit(): void {
    console.log("name "+this.name);
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
