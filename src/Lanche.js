// Lanche = PRODUCT do padrão Builder.
// Representa o objeto final, já pronto. Não sabe como foi montado,
// apenas guarda as características que o LancheBuilder definiu.
export class Lanche {
  constructor({ tamanho, pao, proteina, queijo, aquecido, saladas, molhos, temperos }) {
    this.tamanho = tamanho;
    this.pao = pao;
    this.proteina = proteina;
    this.queijo = queijo;
    this.aquecido = aquecido;
    this.saladas = saladas;
    this.molhos = molhos;
    this.temperos = temperos;
  }

  // Apenas exibe o pedido de forma organizada. Não faz parte do
  // padrão Builder em si, é só apoio para o console.log final.
  exibir() {
    console.log(`Tamanho:   ${this.tamanho}`);
    console.log(`Pão:       ${this.pao}`);
    console.log(`Proteína:  ${this.proteina}`);
    console.log(`Queijo:    ${this.queijo ?? "Nenhum"}`);
    console.log(`Aquecido:  ${this.aquecido ? "Sim" : "Não"}`);
    console.log(`Saladas:   ${this.saladas.length ? this.saladas.join(", ") : "Nenhuma"}`);
    console.log(`Molhos:    ${this.molhos.length ? this.molhos.join(", ") : "Nenhum"}`);
    console.log(`Temperos:  ${this.temperos.length ? this.temperos.join(", ") : "Nenhum"}`);
  }
}
