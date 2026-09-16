"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioCLT = void 0;
const Funcionario_js_1 = require("./Funcionario.js");
const validators_js_1 = require("../utils/validators.js");
class FuncionarioCLT extends Funcionario_js_1.Funcionario {
    _bonusAnual;
    constructor(id, nome, cpf, salarioBase, bonusAnual) {
        super(id, nome, cpf, salarioBase);
        this.validarBonusAnual(bonusAnual);
        this._bonusAnual = bonusAnual;
    }
    get bonusAnual() {
        return this._bonusAnual;
    }
    set bonusAnual(novoBonus) {
        this.validarBonusAnual(novoBonus);
        this._bonusAnual = novoBonus;
    }
    validarBonusAnual(bonus) {
        if (bonus < 0) {
            throw new Error("O bônus anual não pode ser negativo.");
        }
    }
    calcularSalarioMensal() {
        // Rateia o bônus anual em 12 meses
        return this.salarioBase + this._bonusAnual / 12;
    }
    getTipo() {
        return "CLT";
    }
    exibirResumo() {
        const bonusFmt = validators_js_1.ValidacaoUtils.formatarMoeda(this._bonusAnual);
        return `${super.exibirResumo()} | Bônus Anual: ${bonusFmt}`;
    }
}
exports.FuncionarioCLT = FuncionarioCLT;
