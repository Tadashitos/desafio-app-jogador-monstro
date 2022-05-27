import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public jogador: number = 100
  public monstro: number = 100
  public ataqueJogador: number
  public ataqueMonstro: number
  public curaJogador: number
  public classe: string
  public jogoAcabou: boolean = false
  public jogadorVenceu: boolean = false
  public monstroVenceu: boolean = false
  public ambosPerderam: boolean = false
  public progressoJogador: number = 100
  public progressoMonstro: number = 100
  public clickAtaque: boolean = false
  public clickAtaqueMonstro: boolean = false
  public clickAtaqueEspecial: boolean = false
  public clickCura: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public criarLogAtaque(): void{
    $(document).ready(() => {
      /*
      document.getElementById('divPrincipal').className = 'row'
      document.getElementById('divPrincipal').className = 'pt-5'
      document.getElementById('divPrincipal').className = 'pb-5'
      document.getElementById('teste').className = 'col'
      document.getElementById('teste').className = 'text-center'
      let texto = document.createTextNode('TESTE')
      let quebraLinha = document.createElement('br')
      document.getElementById('teste').appendChild(texto)
      document.getElementById('teste').appendChild(quebraLinha)
      */
      let div1 = document.createElement('div')
      let div2 = document.createElement('div')
      let div3Jogador = document.createElement('div')
      let div3Monstro = document.createElement('div')
      let teste1 = document.getElementById('teste1')
      teste1.appendChild(div1)
      div1.appendChild(div2)
      div2.appendChild(div3Jogador)
      div2.appendChild(div3Monstro)
      div1.className = 'row'
      div2.className = 'col text-center'
      div3Jogador.style.display = 'block'
      div3Monstro.style.display = 'block'
      div3Jogador.style.marginBottom = '3px'
      div3Monstro.style.marginBottom = '3px'
      div3Jogador.style.background = 'green'
      div3Monstro.style.background = 'red'
      div3Jogador.style.border = 'solid'
      div3Monstro.style.border = 'solid'
      div3Jogador.style.fontWeight = 'bold'
      div3Monstro.style.fontWeight = 'bold'
      div3Jogador.style.color = 'white'
      div3Monstro.style.color = 'white'
      div3Monstro.innerHTML = `MONSTRO ATACOU JOGADOR COM ${this.ataqueMonstro} DE ATAQUE`
      div3Jogador.innerHTML = `JOGADOR ATACOU MONSTRO COM ${this.ataqueJogador} DE ATAQUE`

      teste1.insertAdjacentElement('afterbegin', div1)
      
    })
    
  }
  

  public criarLogAtaqueEspecial(): void{

    $(document).ready(() => {
      /*
      document.getElementById('divPrincipal').className = 'row'
      document.getElementById('divPrincipal').className = 'pt-5'
      document.getElementById('divPrincipal').className = 'pb-5'
      document.getElementById('teste').className = 'col'
      document.getElementById('teste').className = 'text-center'
      let texto = document.createTextNode('TESTE2')
      let quebraLinha = document.createElement('br')
      document.getElementById('teste').appendChild(texto)
      document.getElementById('teste').appendChild(quebraLinha)
      */
      let div1 = document.createElement('div')
      let div2 = document.createElement('div')
      let div3Jogador = document.createElement('div')
      let div3Monstro = document.createElement('div')
      let teste1 = document.getElementById('teste1')
      teste1.appendChild(div1)
      div1.appendChild(div2)
      div2.appendChild(div3Jogador)
      div2.appendChild(div3Monstro)
      div1.className = 'row'
      div2.className = 'col text-center'
      div3Jogador.style.display = 'block'
      div3Monstro.style.display = 'block'
      div3Jogador.style.marginBottom = '3px'
      div3Monstro.style.marginBottom = '3px'
      div3Jogador.style.background = 'green'
      div3Monstro.style.background = 'red'
      div3Jogador.style.border = 'solid'
      div3Monstro.style.border = 'solid'
      div3Jogador.style.fontWeight = 'bold'
      div3Monstro.style.fontWeight = 'bold'
      div3Jogador.style.color = 'white'
      div3Monstro.style.color = 'white'
      div3Monstro.innerHTML = `MONSTRO ATACOU JOGADOR COM ${this.ataqueMonstro} DE ATAQUE`
      div3Jogador.innerHTML = `JOGADOR ATACOU MONSTRO COM UM ESPECIAL DE ${this.ataqueJogador} DE ATAQUE`

      teste1.insertAdjacentElement('afterbegin', div1)

    })
    
  }

  public criarLogAtaqueCura(): void{

    $(document).ready(() => {
      /*
      document.getElementById('divPrincipal').className = 'row'
      document.getElementById('divPrincipal').className = 'pt-5'
      document.getElementById('divPrincipal').className = 'pb-5'
      document.getElementById('teste').className = 'col'
      document.getElementById('teste').className = 'text-center'
      let texto = document.createTextNode('TESTE3')
      let quebraLinha = document.createElement('br')
      document.getElementById('teste').appendChild(texto)
      document.getElementById('teste').appendChild(quebraLinha)
      */
      let div1 = document.createElement('div')
      let div2 = document.createElement('div')
      let div3Jogador = document.createElement('div')
      let div3Monstro = document.createElement('div')
      div1.id = 'divPrincipal'
      div2.id = 'divSecundaria'
      let teste1 = document.getElementById('teste1')
      teste1.appendChild(div1)
      div1.appendChild(div2)
      div2.appendChild(div3Jogador)
      div2.appendChild(div3Monstro)
      div1.className = 'row'
      div2.className = 'col text-center'
      div3Jogador.style.display = 'block'
      div3Monstro.style.display = 'block'
      div3Jogador.style.marginBottom = '3px'
      div3Monstro.style.marginBottom = '3px'
      div3Jogador.style.background = 'blue'
      div3Monstro.style.background = 'red'
      div3Jogador.style.border = 'solid'
      div3Monstro.style.border = 'solid'
      div3Jogador.style.fontWeight = 'bold'
      div3Monstro.style.fontWeight = 'bold'
      div3Jogador.style.color = 'white'
      div3Monstro.style.color = 'white'
      div3Monstro.innerHTML = `MONSTRO ATACOU JOGADOR COM ${this.ataqueMonstro} DE ATAQUE`
      div3Jogador.innerHTML = `JOGADOR USOU ${this.curaJogador} DE CURA`

      teste1.insertAdjacentElement('afterbegin', div1)

    })
    
  }

  public ataque(): void{
   
    this.ataqueJogador = Math.floor(Math.random() * (13 - 5 + 1) + 5)
    this.monstro -= this.ataqueJogador

    this.ataqueMonstro = Math.floor(Math.random() * (13 - 8 + 1) + 8)
    this.jogador -= this.ataqueMonstro

    //this.jogador e this.monstro

    if(this.jogador <= 0){
      //this.classe = 'disabled'
      this.jogador = 0
      this.jogoAcabou = true
      this.monstroVenceu = true
      //this.encerrarJogo.emit('vitoriaMonstro')
    } else if(this.monstro <= 0){
      //this.classe = 'disabled'
      this.monstro = 0
      this.jogoAcabou = true
      this.jogadorVenceu = true
      //this.encerrarJogo.emit('vitoriaJogador')
    } else if(this.jogador <= 0 && this.monstro <= 0){
      this.jogoAcabou = true
      this.ambosPerderam = true
    }

    if(this.jogador <= 0 && this.monstro <= 0){
      this.jogadorVenceu = false
      this.monstroVenceu = false
      this.jogoAcabou = true
      this.ambosPerderam = true
      this.jogador = 0
      this.monstro = 0
      //this.encerrarJogo.emit('empate')
    }

    this.clickAtaque = true
    this.clickAtaqueEspecial = false
    this.clickCura = false
    this.clickAtaqueMonstro = false

    this.criarLogAtaque()

  }

  public ataqueEspecial(): void{

    this.ataqueJogador = Math.floor(Math.random() * (13 - 8 + 1) + 8)
    this.monstro -= this.ataqueJogador

    this.ataqueMonstro = Math.floor(Math.random() * (13 - 6 + 1) + 6)
    this.jogador -= this.ataqueMonstro

    if(this.jogador <= 0){
      //this.classe = 'disabled'
      this.jogador = 0
      this.jogoAcabou = true
      this.monstroVenceu = true
      //this.encerrarJogo.emit('vitoriaMonstro')
    } else if(this.monstro <= 0){
      //this.classe = 'disabled'
      this.monstro = 0
      this.jogoAcabou = true
      this.jogadorVenceu = true
      //this.encerrarJogo.emit('vitoriaJogador')
    } else if(this.jogador <= 0 && this.monstro <= 0){
      this.jogoAcabou = true
      this.ambosPerderam = true
    }

    if(this.jogador <= 0 && this.monstro <= 0){
      this.jogadorVenceu = false
      this.monstroVenceu = false
      this.jogoAcabou = true
      this.ambosPerderam = true
      this.jogador = 0
      this.monstro = 0
      //this.encerrarJogo.emit('empate')
    }

    this.clickAtaque = false
    this.clickAtaqueEspecial = true
    this.clickCura = false
    this.clickAtaqueMonstro = false

    this.criarLogAtaqueEspecial()
    
  }

  public cura(): void{
    this.curaJogador = Math.floor(Math.random() * (13 - 6 + 1) + 6)
    this.jogador += this.curaJogador

    this.ataqueMonstro = Math.floor(Math.random() * (13 - 6 + 1) + 6)
    this.jogador -= this.ataqueMonstro

    if(this.jogador <= 0){
      //this.classe = 'disabled'
      this.jogador = 0
      this.jogoAcabou = true
      this.monstroVenceu = true
      //this.encerrarJogo.emit('vitoriaMonstro')
    } else if(this.monstro <= 0){
      //this.classe = 'disabled'
      this.monstro = 0
      this.jogoAcabou = true
      this.jogadorVenceu = true
      //this.encerrarJogo.emit('vitoriaJogador')
    } else if(this.jogador <= 0 && this.monstro <= 0){
      this.jogoAcabou = true
      this.ambosPerderam = true
    }

    if(this.jogador <= 0 && this.monstro <= 0){
      this.jogadorVenceu = false
      this.monstroVenceu = false
      this.jogoAcabou = true
      this.ambosPerderam = true
      this.jogador = 0
      this.monstro = 0
      //this.encerrarJogo.emit('empate')
      
    }

    this.clickAtaque = false
    this.clickAtaqueEspecial = false
    this.clickCura = true
    this.clickAtaqueMonstro = true

    this.criarLogAtaqueCura()

  }

  public desistir(): void{
    window.location.reload()
  }

}
