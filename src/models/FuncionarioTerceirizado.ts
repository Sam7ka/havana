import { Funcionario } from "./Funcionario.js";

export class FuncionarioTerceirizado extends Funcionario {
  private _taxaAdicionalPercentual: number;

  constructor(
    id: string,
    nome: string,
    cpf: string,
    salarioBase: number,
    taxaAdicionalPercentual: number
  ) {
    super(id, nome, cpf, salarioBase);
    this.validarTaxaAdicional(taxaAdicionalPercentual);
    this._taxaAdicionalPercentual = taxaAdicionalPercentual;
  }

  public get taxaAdicionalPercentual(): number {
    return this._taxaAdicionalPercentual;
  }

  public set taxaAdicionalPercentual(novaTaxa: number) {
    this.validarTaxaAdicional(novaTaxa);
    this._taxaAdicionalPercentual = novaTaxa;
  }

  private validarTaxaAdicional(taxa: number): void {
    if (taxa < 0 || taxa > 100) {
      throw new Error("A taxa adicional não pode ser negativa nem maior que 100%.");
    }
  }

  public calcularSalarioMensal(): number {
    return this.salarioBase * (1 + this._taxaAdicionalPercentual / 100);
  }

  public getTipo(): string {
    return "Terceirizado";
  }

  public override exibirResumo(): string {
    return `${super.exibirResumo()} | Taxa Adicional: ${this._taxaAdicionalPercentual}%`;
  }
}