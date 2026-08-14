// Classe de abstração para representar o time
class TimeDeFutebol {
    constructor(nome, titulos) {
        this.nome = nome;
        this.titulos = titulos;
    }

    descreverTimes() {
        return `Os 4 Grandes são: ${this.nome} em Primeiro lugar com ${this.titulos}.`;
    }
    descreverTimes2() {
        return `Os 4 Grandes são: ${this.nome} em Segundo lugar com ${this.titulos}.`;
    }
    descreverTimes3() {
        return `Os 4 Grandes são: ${this.nome} em Terceiro lugar com ${this.titulos}.`;
    }
    descreverTimes4() {
        return `Os 4 Grandes são: ${this.nome} em Quarto lugar com ${this.titulos}.`;
    }
}

// herança: Classe que herda de TimeDeFutebol
class saoPaulo extends TimeDeFutebol {
    constructor() {
        super('São Paulo', '43 Titulos');// super chama o construtor da classe pai (TimeDeFutebol)
    }
}

class corinthians extends TimeDeFutebol {
    constructor() {
        super('Corinthians', '30 Titulos');
    }
}

class palmeiras extends TimeDeFutebol {
    constructor() {
        super('Palmeiras', '20 Titulos');
    }
}

class santos extends TimeDeFutebol {
    constructor() {
        super('Santos', '15 Titulos');
    }
}
// Instanciando a classe Campeonato para cada time
const SaoPaulo = new saoPaulo();// new para criar uma nova instância da classe saoPaulo
const Corintoians = new corinthians();
const Palmeiras = new palmeiras();
const Santos = new santos();

// Exibindo os resultados
console.log(SaoPaulo.descreverTimes());
console.log(Corintoians.descreverTimes2());
console.log(Palmeiras.descreverTimes3());
console.log(Santos.descreverTimes4());