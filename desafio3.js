
   class heroi {
        constructor(nome, idade, tipo) {
this.nome = nome;
this.idade = idade;
this.tipo = tipo;
    
}
    atacar() {
        let ataque;
            if (this.tipo === "mago") {
                ataque = "usou magia";
            } else if (this.tipo === "guerreiro") {
                ataque = "usou espada";
            } else if (this.tipo === "monge") {
                ataque = " usou artes marciais";
            } else if (this.tipo === "ninja") {
                ataque = "usou shuriken";
            } else {
                ataque = "usou um ataque secreto";
            }
            
            
            console.log( `o ${this.tipo} atacou usando ${ataque}`);
       
        }
        } 

        const heroi1 = new heroi("Malandraquias",180, "mago");
        const heroi2 = new heroi("leonidas", 53, "guerreiro")
        const heroi3 = new heroi("jackie chan", 30, "monge")
        const heroi4 = new heroi("Naruto", 25, "ninja")
        const heroi5 = new heroi("ligerius", 23, "Druida")

        heroi1.atacar();
		heroi2.atacar();
		heroi3.atacar();
		heroi4.atacar();
		heroi5.atacar();