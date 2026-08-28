import { Lanche } from "./Lanche.js";

// LancheBuilder = BUILDER do padrão Builder.
// Guarda o estado do lanche enquanto ele está sendo montado.
// Cada método configura uma parte e retorna "this", permitindo
// encadear as chamadas (method chaining).
export class LancheBuilder {
  constructor() {
    this.tamanho = null;
    this.pao = null;
    this.proteina = null;
    this.queijo = null;
    this.aquecido = false;
    this.saladas = [];
    this.molhos = [];
    this.temperos = [];
  }

  definirTamanho(tamanho) {
    this.tamanho = tamanho;
    return this;
  }

  escolherPao(pao) {
    this.pao = pao;
    return this;
  }

  escolherProteina(proteina) {
    this.proteina = proteina;
    return this;
  }

  adicionarQueijo(queijo) {
    this.queijo = queijo;
    return this;
  }

  definirAquecimento(aquecido) {
    this.aquecido = aquecido;
    return this;
  }

  adicionarSalada(salada) {
    this.saladas.push(salada);
    return this;
  }

  adicionarMolho(molho) {
    this.molhos.push(molho);
    return this;
  }

  adicionarTempero(tempero) {
    this.temperos.push(tempero);
    return this;
  }

  // construir() = etapa final. Valida o mínimo necessário e entrega
  // um objeto Lanche novo (o PRODUCT), diferente do próprio builder.
  // Os arrays são copiados com [...] para que o próximo pedido, feito
  // com o mesmo builder reaproveitado, não altere um pedido já pronto.
  construir() {
    if (!this.tamanho) throw new Error("Tamanho é obrigatório.");
    if (!this.pao) throw new Error("Pão é obrigatório.");
    if (!this.proteina) throw new Error("Proteína é obrigatória.");

    return new Lanche({
      tamanho: this.tamanho,
      pao: this.pao,
      proteina: this.proteina,
      queijo: this.queijo,
      aquecido: this.aquecido,
      saladas: [...this.saladas],
      molhos: [...this.molhos],
      temperos: [...this.temperos],
    });
  }
}
