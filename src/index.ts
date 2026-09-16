import { FuncionarioCLT } from "./models/FuncionarioCLT.js";
import { FuncionarioPJ } from "./models/FuncionarioPJ.js";
import { FuncionarioTerceirizado } from "./models/FuncionarioTerceirizado.js";
import { FolhaPagamento } from "./services/FolhaPagamento.js";

const sistemaFolha = new FolhaPagamento();

console.log("=== TECH SOLUTIONS LTDA - SISTEMA DE GESTÃO ===\n");

// 1. Cadastros Válidos
try {
  // CPF fictício válido para teste: 52998224725 / 11144477735
  const funcCLT = new FuncionarioCLT("F01", "Ana Silva", "52998224725", 5000.0, 12000.0);
  const funcPJ = new FuncionarioPJ("F02", "Carlos Eduardo", "11144477735", 80.0, 160);
  const funcTerc = new FuncionarioTerceirizado("F03", "Beatriz Lima", "52998224725", 4500.0, 20);

  sistemaFolha.adicionarFuncionario(funcCLT);
  sistemaFolha.adicionarFuncionario(funcPJ);
  sistemaFolha.adicionarFuncionario(funcTerc);

  // Exibição consolidada da folha
  sistemaFolha.listarFuncionarios();
} catch (error: any) {
  console.error(`[ERRO]: ${error.message}`);
}

// 2. Testes de Validação e Tratamento de Erros
console.log("--- TESTANDO REGRAS DE VALIDAÇÃO ---");

function testarCadastro(descricao: string, acao: () => void) {
  try {
    acao();
    console.log(`[FALHA] ${descricao} (deveria ter disparado erro)`);
  } catch (error: any) {
    console.log(`[SUCESSO - ERRO CAPTURADO]: ${error.message}`);
  }
}

testarCadastro("CPF Inválido", () => {
  new FuncionarioCLT("F04", "João Souza", "12345678900", 3000, 1000);
});

testarCadastro("Nome Curto", () => {
  new FuncionarioCLT("F05", "Al", "52998224725", 3000, 1000);
});

testarCadastro("Horas Excedidas no PJ", () => {
  new FuncionarioPJ("F06", "Marcos Rocha", "52998224725", 100, 230);
});

testarCadastro("Taxa Maior que 100% em Terceirizado", () => {
  new FuncionarioTerceirizado("F07", "Fernanda Costa", "52998224725", 4000, 110);
});