"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FuncionarioCLT_js_1 = require("./models/FuncionarioCLT.js");
const FuncionarioPJ_js_1 = require("./models/FuncionarioPJ.js");
const FuncionarioTerceirizado_js_1 = require("./models/FuncionarioTerceirizado.js");
const FolhaPagamento_js_1 = require("./services/FolhaPagamento.js");
const sistemaFolha = new FolhaPagamento_js_1.FolhaPagamento();
console.log("=== TECH SOLUTIONS LTDA - SISTEMA DE GESTÃO ===\n");
// 1. Cadastros Válidos
try {
    // CPF fictício válido para teste: 52998224725 / 11144477735
    const funcCLT = new FuncionarioCLT_js_1.FuncionarioCLT("F01", "Ana Silva", "52998224725", 5000.0, 12000.0);
    const funcPJ = new FuncionarioPJ_js_1.FuncionarioPJ("F02", "Carlos Eduardo", "11144477735", 80.0, 160);
    const funcTerc = new FuncionarioTerceirizado_js_1.FuncionarioTerceirizado("F03", "Beatriz Lima", "52998224725", 4500.0, 20);
    sistemaFolha.adicionarFuncionario(funcCLT);
    sistemaFolha.adicionarFuncionario(funcPJ);
    sistemaFolha.adicionarFuncionario(funcTerc);
    // Exibição consolidada da folha
    sistemaFolha.listarFuncionarios();
}
catch (error) {
    console.error(`[ERRO]: ${error.message}`);
}
// 2. Testes de Validação e Tratamento de Erros
console.log("--- TESTANDO REGRAS DE VALIDAÇÃO ---");
function testarCadastro(descricao, acao) {
    try {
        acao();
        console.log(`[FALHA] ${descricao} (deveria ter disparado erro)`);
    }
    catch (error) {
        console.log(`[SUCESSO - ERRO CAPTURADO]: ${error.message}`);
    }
}
testarCadastro("CPF Inválido", () => {
    new FuncionarioCLT_js_1.FuncionarioCLT("F04", "João Souza", "12345678900", 3000, 1000);
});
testarCadastro("Nome Curto", () => {
    new FuncionarioCLT_js_1.FuncionarioCLT("F05", "Al", "52998224725", 3000, 1000);
});
testarCadastro("Horas Excedidas no PJ", () => {
    new FuncionarioPJ_js_1.FuncionarioPJ("F06", "Marcos Rocha", "52998224725", 100, 230);
});
testarCadastro("Taxa Maior que 100% em Terceirizado", () => {
    new FuncionarioTerceirizado_js_1.FuncionarioTerceirizado("F07", "Fernanda Costa", "52998224725", 4000, 110);
});
