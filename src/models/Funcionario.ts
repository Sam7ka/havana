import { ValidacaoUtils } from "../utils/validators.js";

export abstract class Funcionario {
  private _id: string;
  private _nome: string;
  private _cpf: string;
  private _salarioBase: number;

  constructor(id: string, nome: string, cpf: string, salarioBase: number) {
    ValidacaoUtils.validarNome(nome);
    ValidacaoUtils.validarCPF(cpf);
    ValidacaoUtils.validarSalarioBase(salarioBase);

    this._id = id;
    this._nome = nome.trim();
    this._cpf = cpf.replace(/\D/g, "");
    this._salarioBase = salarioBase;
  }

  public get id(): string {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(novoNome: string) {
    ValidacaoUtils.validarNome(novoNome);
    this._nome = novoNome.trim();
  }

  public get cpf(): string {
    return this._cpf;
  }

  public get salarioBase(): number {
    return this._salarioBase;
  }

  public set salarioBase(novoSalario: number) {
    ValidacaoUtils.validarSalarioBase(novoSalario);
    this._salarioBase = novoSalario;
  }

  public abstract calcularSalarioMensal(): number;

  public abstract getTipo(): string;

  public exibirResumo(): string {
    const salario = ValidacaoUtils.formatarMoeda(this.calcularSalarioMensal());
    return `ID: ${this._id} | Nome: ${this._nome} | Tipo: ${this.getTipo()} | Salário Calculado: ${salario}`;
  }
}