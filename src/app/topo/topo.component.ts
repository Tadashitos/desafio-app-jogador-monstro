import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})

export class TopoComponent implements OnInit {

  @Input() public jogador: any
  @Input() public monstro: any

  constructor() { }

  ngOnInit(): void {
  }

}
