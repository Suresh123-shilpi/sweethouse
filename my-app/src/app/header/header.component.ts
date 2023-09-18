import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName : string = "admin";
  constructor(){

  }
  ngOnInit(){
    this.userName = "admin";
  }
}
