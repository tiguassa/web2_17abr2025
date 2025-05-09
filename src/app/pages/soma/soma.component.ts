import { Component } from '@angular/core';
import { SomaService } from '../../services';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-soma',
  standalone: true,
  imports: [],
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent {
  private res: number = 0;

  constructor(private somaService: SomaService) {}

  somarBotao(numero1: string, numero2: string): void {
    let n1 = parseFloat(numero1);
    let n2 = parseFloat(numero2);
    this.res = this.somaService.somar(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}