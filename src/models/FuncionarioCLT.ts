import { Funcionario } from "./Funcionario.js";
import { ValidacaoUtils } from "../utils/validators.js";

export class FuncionarioCLT extends Funcionario {
  private _bonusAnual: number;

  constructor(id: string, nome: string, cpf: string, salarioBase: number, bonusAnual: number) {
    super(id, nome, cpf, salarioBase);
    this.validarBonusAnual(bonusAnual);
    this._bonusAnual = bonusAnual;
  }

  public get bonusAnual(): number {
    return this._bonusAnual;
  }

  public set bonusAnual(novoBonus: number) {
    this.validarBonusAnual(novoBonus);
    this._bonusAnual = novoBonus;
  }

  private validarBonusAnual(bonus: number): void {
    if (bonus < 0) {
      throw new Error("O bônus anual não pode ser negativo.");
    }
  }

  public calcularSalarioMensal(): number {
    // Rateia o bônus anual em 12 meses
    return this.salarioBase + this._bonusAnual / 12;
  }

  public getTipo(): string {
    return "CLT";
  }

  public override exibirResumo(): string {
    const bonusFmt = ValidacaoUtils.formatarMoeda(this._bonusAnual);
    return `${super.exibirResumo()} | Bônus Anual: ${bonusFmt}`;
  }
}