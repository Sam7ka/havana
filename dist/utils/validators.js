"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidacaoUtils = void 0;
class ValidacaoUtils {
    static validarNome(nome) {
        if (!nome || nome.trim().length < 3) {
            throw new Error("O nome não pode ter menos que 3 caracteres.");
        }
    }
    static validarSalarioBase(salario) {
        if (salario < 0) {
            throw new Error("Salário não pode ser negativo.");
        }
    }
    static validarCPF(cpf) {
        const cpfLimpo = cpf.replace(/\D/g, "");
        if (cpfLimpo.length !== 11 || /^(\d)\1{10}$/.test(cpfLimpo)) {
            throw new Error("CPF inválido. Verifique o número digitado.");
        }
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11)
            resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(9, 10))) {
            throw new Error("CPF inválido. Verifique o número digitado.");
        }
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11)
            resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(10, 11))) {
            throw new Error("CPF inválido. Verifique o número digitado.");
        }
    }
    static formatarMoeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }
}
exports.ValidacaoUtils = ValidacaoUtils;
