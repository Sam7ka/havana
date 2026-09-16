"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioPJ = void 0;
const Funcionario_js_1 = require("./Funcionario.js");
class FuncionarioPJ extends Funcionario_js_1.Funcionario {
    _valorHora;
    _horasTrabalhadas;
    constructor(id, nome, cpf, valorHora, horasTrabalhadas) {
        // PJ possui salário base zero por padrão
        super(id, nome, cpf, 0);
        this.validarValorHora(valorHora);
        this.validarHorasTrabalhadas(horasTrabalhadas);
        this._valorHora = valorHora;
        this._horasTrabalhadas = horasTrabalhadas;
    }
    get valorHora() {
        return this._valorHora;
    }
    set valorHora(novoValor) {
        this.validarValorHora(novoValor);
        this._valorHora = novoValor;
    }
    get horasTrabalhadas() {
        return this._horasTrabalhadas;
    }
    set horasTrabalhadas(novasHoras) {
        this.validarHorasTrabalhadas(novasHoras);
        this._horasTrabalhadas = novasHoras;
    }
    validarValorHora(valor) {
        if (valor <= 0) {
            throw new Error("O valor da hora precisa ser positivo.");
        }
    }
    validarHorasTrabalhadas(horas) {
        if (horas < 0 || horas > 220) {
            throw new Error("Horas trabalhadas não podem exceder 220 horas.");
        }
    }
    calcularSalarioMensal() {
        return this._valorHora * this._horasTrabalhadas;
    }
    getTipo() {
        return "PJ";
    }
    exibirResumo() {
        return `${super.exibirResumo()} | Horas: ${this._horasTrabalhadas}h | Valor/Hora: R$ ${this._valorHora.toFixed(2)}`;
    }
}
exports.FuncionarioPJ = FuncionarioPJ;
