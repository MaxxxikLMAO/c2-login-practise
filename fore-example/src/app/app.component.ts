import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fore-example';

  private username = '';
  private passwrd = '';

  clickedButton() {
    if(this.username == 'Maxtomooshimasu' && this.passwrd == 'nihongo') {
      alert("Uspesne jste se zaregistrovali!");
    } else {
      alert("Spatne zadane uzivatelske jmeno nebo heslo.");
    }
  }
}