import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  cur: number= 175;
  toDate: Date = new Date();
  title: string = 'Angular pipes Example' ;
  msg: string= 'Welcome to Angular';
}
