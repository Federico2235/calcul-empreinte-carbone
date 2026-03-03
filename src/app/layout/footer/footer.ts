import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    DatePipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
public date:Date;

constructor() {
  this.date=new Date()
}

}
