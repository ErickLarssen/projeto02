# Sistema de Pedidos Subway

## Descrição

Sistema simples em JavaScript que simula a montagem personalizada de um
lanche, no estilo de uma loja Subway. O cliente escolhe tamanho, pão,
proteína, queijo, aquecimento, saladas, molhos e temperos, e o sistema
monta o lanche final passo a passo.

## Objetivo

Projeto acadêmico da disciplina **Técnicas de Programação II**, com o
objetivo de aplicar corretamente o padrão de projeto GoF Criacional
**Builder**.

## Padrão de Projeto

**Builder — GoF Criacional**

## Tecnologias

- JavaScript (ES Modules)
- Node.js

## Estrutura

```
projeto02/
│
├── src/
│   ├── Lanche.js         → Product: representa o lanche final
│   ├── LancheBuilder.js  → Builder: monta o lanche passo a passo
│   └── index.js          → Demonstração com 3 pedidos diferentes
│
├── package.json
├── README.md
└── .gitignore
```

## Como executar

Pré-requisito: Node.js instalado.

```bash
node src/index.js
```

ou, se preferir usar o script do package.json:

```bash
npm start
```

## Funcionamento

O `LancheBuilder` disponibiliza métodos para configurar cada parte do
lanche (`definirTamanho`, `escolherPao`, `escolherProteina`,
`adicionarQueijo`, `definirAquecimento`, `adicionarSalada`,
`adicionarMolho`, `adicionarTempero`). Cada método retorna `this`, o que
permite encadear as chamadas. Ao final, `construir()` valida os campos
obrigatórios (tamanho, pão e proteína) e retorna um objeto `Lanche`
pronto.

```js
const pedido = new LancheBuilder()
  .definirTamanho("30 cm")
  .escolherPao("Italiano")
  .escolherProteina("Frango")
  .adicionarQueijo("Cheddar")
  .definirAquecimento(true)
  .adicionarSalada("Alface")
  .adicionarMolho("Barbecue")
  .adicionarTempero("Orégano")
  .construir();
```

## Builder

| Papel do GoF | Classe / Método | Responsabilidade |
|---|---|---|
| **Product** | `Lanche` | Representa o objeto final, já montado. |
| **Builder** | `LancheBuilder` | Constrói o produto gradualmente, mantendo o estado durante a montagem. |
| **Métodos de construção** | `definirTamanho()`, `escolherPao()`, `escolherProteina()`, `adicionarQueijo()`, `definirAquecimento()`, `adicionarSalada()`, `adicionarMolho()`, `adicionarTempero()` | Cada um define ou adiciona uma característica ao lanche em montagem. |
| **Finalização** | `construir()` | Valida os dados mínimos e retorna o `Lanche` completo. |

O mesmo `LancheBuilder` é reaproveitado para gerar pedidos diferentes,
demonstrando que o Builder separa **construção** de **produto** e permite
**personalização** sem precisar de um construtor gigante com dezenas de
parâmetros.

## Exemplos

**Pedido 01** — 30 cm, Italiano, Frango, Cheddar, aquecido, com saladas,
molho barbecue e orégano.

**Pedido 02** — 15 cm, Integral, Atum, Mussarela, sem aquecimento, com
saladas e maionese.

**Pedido 03** — 30 cm, Parmesão e Orégano, Vegetariano, Prato, aquecido,
com saladas, dois molhos e dois temperos.

Execute `node src/index.js` para ver os três pedidos montados no console.

## Autor

[Érick Silva]
