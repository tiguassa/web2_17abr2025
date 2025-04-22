import { Component } from '@angular/core';
import { SomaService } from '../../services'; // Aqui eu suponho que o serviço já esteja certo
import { NumberSymbol } from '@angular/common'; // Parece não ser usado, podemos remover depois se quiser

@Component({
  selector: 'app-soma',
  standalone: true,
  imports: [],
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css'] // Corrigi de `styleUrl` para `styleUrls`
})
export class SomaComponent {

  private res: number = 0;

  constructor(private somaService: SomaService) {}

  somarBotao(numero1: string, numero2: string): void {
    let n1 = parseFloat(numero1); // Corrigido: precisa usar "="
    let n2 = parseFloat(numero2); // Corrigido também
    this.res = this.somaService.somar(n1, n2);
  }

  get resultado(): string {
    return this.res.toString(); // Corrigido: era vírgula (,) errado, agora é ponto (.) para chamar função
  }
}
