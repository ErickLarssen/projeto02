import { LancheBuilder } from "./LancheBuilder.js";

console.log("========================================");
console.log("       SISTEMA DE PEDIDOS SUBWAY");
console.log("========================================\n");

// PEDIDO 01 — 30 cm, Italiano, Frango, Cheddar, aquecido
const pedido01 = new LancheBuilder()
  .definirTamanho("30 cm")
  .escolherPao("Italiano")
  .escolherProteina("Frango")
  .adicionarQueijo("Cheddar")
  .definirAquecimento(true)
  .adicionarSalada("Alface")
  .adicionarSalada("Tomate")
  .adicionarMolho("Barbecue")
  .adicionarTempero("Orégano")
  .construir();

// PEDIDO 02 — 15 cm, Integral, Atum, Mussarela, não aquecido
const pedido02 = new LancheBuilder()
  .definirTamanho("15 cm")
  .escolherPao("Integral")
  .escolherProteina("Atum")
  .adicionarQueijo("Mussarela")
  .adicionarSalada("Pepino")
  .adicionarSalada("Cebola")
  .adicionarMolho("Maionese")
  .construir();

// PEDIDO 03 — 30 cm, Parmesão e Orégano, Vegetariano, Prato, aquecido
const pedido03 = new LancheBuilder()
  .definirTamanho("30 cm")
  .escolherPao("Parmesão e Orégano")
  .escolherProteina("Vegetariano")
  .adicionarQueijo("Prato")
  .definirAquecimento(true)
  .adicionarSalada("Alface")
  .adicionarSalada("Tomate")
  .adicionarSalada("Cebola")
  .adicionarMolho("Chipotle")
  .adicionarMolho("Mostarda")
  .adicionarTempero("Sal")
  .adicionarTempero("Azeite")
  .construir();

const pedidos = [pedido01, pedido02, pedido03];

pedidos.forEach((pedido, indice) => {
  console.log(`PEDIDO ${String(indice + 1).padStart(2, "0")}`);
  console.log("----------------------------------------");
  pedido.exibir();
  console.log("");
});

console.log("========================================");
console.log(`Total de pedidos montados: ${pedidos.length}`);
console.log("========================================");
