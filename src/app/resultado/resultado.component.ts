import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() public jogador: any
  @Input() public monstro: any
  @Input() public jogadorVenceu: boolean
  @Input() public monstroVenceu: boolean
  @Input() public ambosPerderam: boolean

  constructor() { }

  ngOnInit(): void {
  }

  public reiniciar(): void{
    window.location.reload()
  }

}
