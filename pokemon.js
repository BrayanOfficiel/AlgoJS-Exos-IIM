alert("EXO DES POKEMONS");

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(pokemon) {
        const damage = this.attack - pokemon.defense;
        if (this.isLucky()) {
            pokemon.hp -= damage;
            console.log(`${this.name} attaque ${pokemon.name} et lui inflige ${damage} points de dégâts.`);
            console.log(`${pokemon.name} a maintenant ${pokemon.hp} points de vie.`);
            console.log("");
        } else {
            console.log(`${this.name} attaque ${pokemon.name} mais rate son attaque.`);
            console.log("");
        }
    }
}

const pikachu = new Pokemon("Pikachu", 50, 30, 100, 0.8);
const salameche = new Pokemon("Salameche", 40, 20, 120, 0.7);

let tour = 0;
while (pikachu.hp > 0 && salameche.hp > 0) {
    tour += 1;
    console.log(`▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤ Tour ${tour} ▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤`);
    console.log("");

    pikachu.attackPokemon(salameche);
    if (salameche.hp <= 0) {
        console.log(`${salameche.name} est mort. ${pikachu.name} a gagné.`);
        break;
    }
    salameche.attackPokemon(pikachu);
    if (pikachu.hp <= 0) {
        console.log(`${pikachu.name} est mort. ${salameche.name} a gagné.`);
        break;
    }
}
