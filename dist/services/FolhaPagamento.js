"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolhaPagamento = void 0;
const validators_js_1 = require("../utils/validators.js");
class FolhaPagamento {
    funcionarios = [];
    adicionarFuncionario(funcionario) {
        const existe = this.funcionarios.some((f) => f.id === funcionario.id);
        if (existe) {
            throw new Error(`Já existe um funcionário cadastrado com o ID ${funcionario.id}.`);
        }
        this.funcionarios.push(funcionario);
    }
    calcularTotalFolha() {
        return this.funcionarios.reduce((total, f) => total + f.calcularSalarioMensal(), 0);
    }
    listarFuncionarios() {
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
        console.log(`TOTAL DA FOLHA DE PAGAMENTO: ${validators_js_1.ValidacaoUtils.formatarMoeda(this.calcularTotalFolha())}`);
        console.log("=======================================================\n");
    }
}
exports.FolhaPagamento = FolhaPagamento;
