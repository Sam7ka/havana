import { Funcionario } from "../models/Funcionario.js";
import { ValidacaoUtils } from "../utils/validators.js";

export class FolhaPagamento {
  private funcionarios: Funcionario[] = [];

  public adicionarFuncionario(funcionario: Funcionario): void {
    const existe = this.funcionarios.some((f) => f.id === funcionario.id);
    if (existe) {
      throw new Error(`Já existe um funcionário cadastrado com o ID ${funcionario.id}.`);
    }
    this.funcionarios.push(funcionario);
  }

  public calcularTotalFolha(): number {
    return this.funcionarios.reduce((total, f) => total + f.calcularSalarioMensal(), 0);
  }

  public listarFuncionarios(): void {
    console.log("\n=======================================================");
    console.log("            LISTA DE FUNCIONÁRIOS CADASTRADOS          ");
    console.log("=======================================================");
    
    if (this.funcionarios.length === 0) {
      console.log("Nenhum funcionário cadastrado.");
      return;
    }

    this.funcionarios.forEach((funcionario) => {
      console.log(funcionario.exibirResumo());
    });

    console.log("-------------------------------------------------------");
    console.log(`TOTAL DA FOLHA DE PAGAMENTO: ${ValidacaoUtils.formatarMoeda(this.calcularTotalFolha())}`);
    console.log("=======================================================\n");
  }
}