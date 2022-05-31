import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asdf';
  asdfs = [
    'asdf',
    'sdfa',
    'dfas',
    'fasd',
    'fdsa',
    'dsaf',
    'safd',
    'afds',
    'etc...',
  ];
  newAsdf = "";
  selection = "asdf";

  changeTitle() {
    this.title = 'myapp';
  }
  listAsdfs() {
    return this.asdfs.length;
  }
  addNewAsdf() {
    this.asdfs.push(this.newAsdf);
    this.newAsdf = "";
  }
}
