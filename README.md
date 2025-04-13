# Parte 4 — TDD (Test Driven Development)

Este documento descreve a aplicação da metodologia TDD (Test Driven Development) no desenvolvimento e teste de funcionalidades específicas do sistema.

---

## Objetivo

Demonstrar, por meio de testes unitários com Jest e TypeScript, a aplicação do ciclo TDD nas seguintes funcionalidades:

- Cadastro de um novo animal
- Busca por animais cadastrados

---

## Estrutura da Solução

backend/tdd/ 
├── tests/ │ 
  └── animalService.test.ts # Testes unitários 
├── services/ │ 
  └── animalService.ts # Implementação mínima para atender aos testes 
├── jest.config.js # Configuração do Jest 
├── tsconfig.json # Configuração do TypeScript 
├── package.json # Script de execução dos testes


---

## Funcionalidades Testadas

| Funcionalidade        | Descrição                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| Cadastro de Animal    | Verifica o correto cadastro de um novo animal com dados básicos           |
| Busca de Animais      | Verifica se a lista de animais cadastrados é retornada corretamente       |

---

## Ciclo TDD Aplicado

1. O teste foi escrito **antes** da implementação da funcionalidade.
2. O teste foi executado e **falhou**, como esperado.
3. A implementação mínima foi feita para que o teste **passasse**.
4. Após os testes passarem, o código foi mantido simples e funcional.

---

## Execução dos Testes

1. Instalar dependências:

npm install

2. Executar os testes unitários:
   npm test
3. Gerar relatório de cobertura:
   npx jest --coverage
