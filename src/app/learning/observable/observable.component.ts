import { Component,OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent  implements OnInit{
  obs = new Observable(observer => {
    console.log('Observable starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    observer.next('5');
    observer.complete()
  });
 
  ngOnInit() {
    this.obs.subscribe( {
      next: (val) => {
        console.log(val);
      }, //next callback
      error: (error) => {
        console.log('error');
      }, //error callback
      complete:() => {
        console.log('Completed');
      } //complete callback
    }
    );
  }
}
