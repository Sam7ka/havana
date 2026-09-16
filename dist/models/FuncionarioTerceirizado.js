"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioTerceirizado = void 0;
const Funcionario_js_1 = require("./Funcionario.js");
class FuncionarioTerceirizado extends Funcionario_js_1.Funcionario {
    _taxaAdicionalPercentual;
    constructor(id, nome, cpf, salarioBase, taxaAdicionalPercentual) {
        super(id, nome, cpf, salarioBase);
        this.validarTaxaAdicional(taxaAdicionalPercentual);
        this._taxaAdicionalPercentual = taxaAdicionalPercentual;
    }
    get taxaAdicionalPercentual() {
        return this._taxaAdicionalPercentual;
    }
    set taxaAdicionalPercentual(novaTaxa) {
        this.validarTaxaAdicional(novaTaxa);
        this._taxaAdicionalPercentual = novaTaxa;
    }
    validarTaxaAdicional(taxa) {
        if (taxa < 0 || taxa > 100) {
            throw new Error("A taxa adicional não pode ser negativa nem maior que 100%.");
        }
    }
    calcularSalarioMensal() {
        return this.salarioBase * (1 + this._taxaAdicionalPercentual / 100);
    }
    getTipo() {
        return "Terceirizado";
    }
    exibirResumo() {
        return `${super.exibirResumo()} | Taxa Adicional: ${this._taxaAdicionalPercentual}%`;
    }
}
exports.FuncionarioTerceirizado = FuncionarioTerceirizado;
