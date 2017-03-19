import { Component } frm '@angular/core'


 // a class with a html view.
 @Component({
 selector : 'app', /* tag in html */
  /*
  template: '
  <dev> {{titile}} </dev>
  '
  */
  templateUrl: './app.html'
 })
export class AppCompont {
  title : string = 'Bohan'
}


// one way binding, view listen the compontent
