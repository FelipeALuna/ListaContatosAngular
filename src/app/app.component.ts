import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mostrandoModal =false;
  title = 'contatos';
  funcao(){
    console.log('eu te escutei meu filho');
    this.mostrandoModal = true;
  }
  ocultarModal(){
    this.mostrandoModal = false;
  }

}


