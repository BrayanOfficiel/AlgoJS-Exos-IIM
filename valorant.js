// Définition du nombre de manches à gagner
let mancheActuelle = 1;
const mancheMax = 13;

while (mancheActuelle <= mancheMax) {

    // Définition des équipes
    let equipeAttaque = [
        {
            nom: "Omen",
            special: "Smoker",
        },
        {
            nom: "Phoenix",
            special: "Flasher",
        },
        {
            nom: "Jett",
            special: "Killer",
        },
        {
            nom: "Fade",
            special: "Aucun",
        },
        {
            nom: "Chamber",
            special: "Aucun",
        }
    ];

    let equipeDefense = [
        {
            nom: "Défenseur 1",
        },
        {
            nom: "Défenseur 2",
        },
        {
            nom: "Défenseur 3",
        },
        {
            nom: "Défenseur 4",
        },
        {
            nom: "Défenseur 5",
        }
    ];

    console.log("========== Manche " + mancheActuelle + " ==========");
    console.log("");

    // Définition des variables
    let spikeAmorce = false; // État du spike
    let chanceAmorceSpike = 0.5; // Chance d'amorcer le spike
    let chanceTuerDefenseur = 0.5; // Chance de tuer un Défenseur

    // Sélection d'un joueur aléatoire dans l'équipe 1
    let randomPlayer1 = equipeAttaque[Math.floor(Math.random() * equipeAttaque.length)];
    // Sélection d'un joueur aléatoire dans l'équipe 2
    let randomPlayer2 = equipeDefense[Math.floor(Math.random() * equipeDefense.length)];

    if (Math.random() < 0.5) {
        // Tue un attaquant
        console.log("Un défenseur a tué " + randomPlayer1.nom);
        equipeAttaque.splice(equipeAttaque.indexOf(randomPlayer1), 1);
        chanceAmorceSpike = 0.4;
    } else {
        // Tue un défenseur
        console.log(randomPlayer1.nom + " a tué un défenseur");
        equipeDefense.splice(equipeDefense.indexOf(randomPlayer2), 1);
        chanceAmorceSpike = 0.6;
    }

    console.log("Chance d'amorcer le spike : " + chanceAmorceSpike * 100 + "%");
    console.log("");

    //tant que tous les joueurs d'une équipe sont vivants et que le spike n'est pas amorcé on continue la manche
    while (equipeAttaque.length > 0 && equipeDefense.length > 0) {

        // On vérifie si le spike est amorcé
        if (!spikeAmorce && Math.random() < chanceAmorceSpike) {
            spikeAmorce = true;
            chanceTuerDefenseur = 0.7;
            // On choisi un joueur aléatoire pour amorcer le spike
            let joueurAmorceSpike = equipeAttaque[Math.floor(Math.random() * equipeAttaque.length)];

            console.log(joueurAmorceSpike.nom + " a amorcé le spike");
            console.log("Chance de tuer un défenseur : " + chanceTuerDefenseur * 100 + "%");
            console.log("");
        }

        // Sélection d'un joueur aléatoire dans l'équipe 1
        let randomPlayer1 = equipeAttaque[Math.floor(Math.random() * equipeAttaque.length)];
        // Sélection d'un joueur aléatoire dans l'équipe 2
        let randomPlayer2 = equipeDefense[Math.floor(Math.random() * equipeDefense.length)];


        if (Math.random() > chanceTuerDefenseur) {
            // Tue un attaquant
            console.log("Un défenseur a tué " + randomPlayer1.nom);
            equipeAttaque.splice(equipeAttaque.indexOf(randomPlayer1), 1);
        } else {
            // Tue un défenseur
            console.log(randomPlayer1.nom + " a tué un défenseur");
            equipeDefense.splice(equipeDefense.indexOf(randomPlayer2), 1);
        }
        console.log("");

        console.log(`${equipeAttaque.length}A vs ${equipeDefense.length}D`);
        console.log("");
    }

    if (equipeAttaque.length == 0) {
        console.log("Les défenseurs ont gagné.");
    } else {
        console.log("Les attaquants ont gagné.");
    }
    console.log("");

    mancheActuelle++;
}