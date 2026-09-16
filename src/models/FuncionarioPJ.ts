import { Funcionario } from "./Funcionario.js";

export class FuncionarioPJ extends Funcionario {
  private _valorHora: number;
  private _horasTrabalhadas: number;

  constructor(
    id: string,
    nome: string,
    cpf: string,
    valorHora: number,
    horasTrabalhadas: number
  ) {
    // PJ possui salário base zero por padrão
    super(id, nome, cpf, 0);
    this.validarValorHora(valorHora);
    this.validarHorasTrabalhadas(horasTrabalhadas);

    this._valorHora = valorHora;
    this._horasTrabalhadas = horasTrabalhadas;
  }

  public get valorHora(): number {
    return this._valorHora;
  }

  public set valorHora(novoValor: number) {
    this.validarValorHora(novoValor);
    this._valorHora = novoValor;
  }

  public get horasTrabalhadas(): number {
    return this._horasTrabalhadas;
  }

  public set horasTrabalhadas(novasHoras: number) {
    this.validarHorasTrabalhadas(novasHoras);
    this._horasTrabalhadas = novasHoras;
  }

  private validarValorHora(valor: number): void {
    if (valor <= 0) {
      throw new Error("O valor da hora precisa ser positivo.");
    }
  }

  private validarHorasTrabalhadas(horas: number): void {
    if (horas < 0 || horas > 220) {
      throw new Error("Horas trabalhadas não podem exceder 220 horas.");
    }
  }

  public calcularSalarioMensal(): number {
    return this._valorHora * this._horasTrabalhadas;
  }

  public getTipo(): string {
    return "PJ";
  }

  public override exibirResumo(): string {
    return `${super.exibirResumo()} | Horas: ${this._horasTrabalhadas}h | Valor/Hora: R$ ${this._valorHora.toFixed(2)}`;
  }
}