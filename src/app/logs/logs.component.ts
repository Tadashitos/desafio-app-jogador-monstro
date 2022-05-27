import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})

export class LogsComponent implements OnInit {
  
  public createDiv() {
    let div = document.createElement('div')
    div.innerText = document.getElementById('getText').innerText
    document.body.appendChild(div)
  }
  
  /*
  <div id="getText" style="display: none;">
    INNER TEXT
  </div>
  */

  /*
  <div class="row pt-5 pb-5" #Teste>
    <div class="col text-center">
        MONSTRO ATINGIU JOGADOR COM {{ataqueMonstro}}.
    </div>
  </div>
  */

  constructor() { }

  ngOnInit(): void {
  }


}
