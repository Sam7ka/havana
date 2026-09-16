"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const validators_js_1 = require("../utils/validators.js");
class Funcionario {
    _id;
    _nome;
    _cpf;
    _salarioBase;
    constructor(id, nome, cpf, salarioBase) {
        validators_js_1.ValidacaoUtils.validarNome(nome);
        validators_js_1.ValidacaoUtils.validarCPF(cpf);
        validators_js_1.ValidacaoUtils.validarSalarioBase(salarioBase);
        this._id = id;
        this._nome = nome.trim();
        this._cpf = cpf.replace(/\D/g, "");
        this._salarioBase = salarioBase;
    }
    // Getters e Setters com Encapsulamento
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        validators_js_1.ValidacaoUtils.validarNome(novoNome);
        this._nome = novoNome.trim();
    }
    get cpf() {
        return this._cpf;
    }
    get salarioBase() {
        return this._salarioBase;
    }
    set salarioBase(novoSalario) {
        validators_js_1.ValidacaoUtils.validarSalarioBase(novoSalario);
        this._salarioBase = novoSalario;
    }
    exibirResumo() {
        const salario = validators_js_1.ValidacaoUtils.formatarMoeda(this.calcularSalarioMensal());
        return `ID: ${this._id} | Nome: ${this._nome} | Tipo: ${this.getTipo()} | Salário Calculado: ${salario}`;
    }
}
exports.Funcionario = Funcionario;
