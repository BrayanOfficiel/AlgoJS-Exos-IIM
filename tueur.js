alert("EXO DU TUEUR");

//Tableau du tueur

let tueur = {
    nom: "Jason",
    hp: 100,
}

//Tableaux des survivants et des caractères disponibles

let survivantsDispos = [
    "Alexis", "Anthony", "Antoine", "Aurélien", "Baptiste", "Benjamin", "Benoit", "Cédric", "Clément", "Cyril", "Damien", "David", "Dimitri", "Dylan", "Fabien", "Florian", "François", "Frédéric", "Gaëtan", "Guillaume", "Hugo", "Jérémy", "Jonathan", "Jordan", "Julien", "Kevin", "Laurent", "Lionel", "Loïc", "Lucas", "Ludovic", "Mathieu", "Maxime", "Mickaël", "Nicolas", "Olivier", "Pierre", "Quentin", "Romain", "Sébastien", "Simon", "Stéphane", "Sylvain", "Thomas", "Théo", "Valentin", "Vincent", "Yann", "Yohann", "Yves"
];
let caracteresDispos = [
    {
        caractere: "le sportif",
        meurt: 0.2,
        meurtMaisAtt: 0.3,
        att: 0.5,
    },
    {
        caractere: "le geek",
        meurt: 0.6,
        meurtMaisAtt: 0.2,
        att: 0.2,
    },
    {
        caractere: "l'artiste",
        meurt: 0.3,
        meurtMaisAtt: 0.4,
        att: 0.3,
    },
    {
        caractere: "le leader",
        meurt: 0.2,
        meurtMaisAtt: 0.2,
        att: 0.6,
    },
    {
        caractere: "le timide",
        meurt: 0.4,
        meurtMaisAtt: 0.1,
        att: 0.5,
    },
];

//Définition des tableaux des survivants et des caractères à choisir

let survivants = [];
let survivantsMorts = [];

//Choix des survivants et de leurs caractère

for (let i = 0; i < 5; i++) {
    let caractereRandom = caracteresDispos[Math.floor(Math.random() * caracteresDispos.length)];
    let survivantRandom = survivantsDispos[Math.floor(Math.random() * survivantsDispos.length)];

    caracteresDispos.splice(caracteresDispos.indexOf(caractereRandom), 1);
    survivantsDispos.splice(survivantsDispos.indexOf(survivantRandom), 1);
    survivants.push({
        nom: survivantRandom,
        caractere: caractereRandom.caractere,
        meurt: caractereRandom.meurt,
        meurtMaisAtt: caractereRandom.meurtMaisAtt,
        att: caractereRandom.att,
    });
}

//Affichage des survivants et du tueur
console.log("");

console.log("======== TUEURS ========");
console.log(`-- ${tueur.nom}, ${tueur.hp}HP`);
console.log("========================");
console.log("");

console.log("====== SURVIVANTS ======");
survivants.forEach(survivant => {
    console.log(`-- ${survivant.nom}, ${survivant.caractere} à ${survivant.meurt * 100}% de chances de mourir sans mettre de coup, ${survivant.meurtMaisAtt * 100}% de chances de mourir en mettant un coup et ${survivant.att * 100}% de chances de mettre un coup`);
});
console.log("========================");
console.log("");

//Fonction pour choisir une action

function actionFn(proba) {
    let r = Math.random();
    let cumul = 0;

    for (let i = 0; i < proba.length; i++) {
        cumul += proba[i];
        if (r <= cumul) {
            return i; // Retourne l'index de l'action
        }
    }
    return proba.length - 1; //Retourne l'index de la dernière action
}

//Déroulement du jeu

let tour = 0;
while (tueur.hp > 0 && survivants.length > 0) {
    tour += 1;
    console.log(`▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤ Tour ${tour} ▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤`);
    console.log("");

    let survivantRandom = survivants[Math.floor(Math.random() * survivants.length)];
    let action = actionFn([survivantRandom.meurt, survivantRandom.meurtMaisAtt, survivantRandom.att]);

    if (action === 0) {
        console.log(`${survivantRandom.nom} est mort.`);
        survivants.splice(survivants.indexOf(survivantRandom), 1);
        survivantsMorts.push(survivantRandom);
    } else if (action === 1) {
        console.log(`${survivantRandom.nom} est mort en infligeant 15 points de dégâts.`);
        survivants.splice(survivants.indexOf(survivantRandom), 1);
        survivantsMorts.push(survivantRandom);
        tueur.hp -= 15;
    } else if (action === 2) {
        console.log(`${survivantRandom.nom} inflige 10 points de dégâts au tueur.`);
        tueur.hp -= 10;
    }
    
    console.log(`Il reste ${survivants.length} survivants, ${survivantsMorts.length} sont morts. Le tueur a ${tueur.hp} points de vie.`);
    console.log("");
}    

console.log(`▤▤▤▤▤▤▤▤▤▤▤▤▤▤ FIN DU JEU ▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤▤`);
console.log("");

if (survivants.length == 0 && tueur.hp > 0) {
    console.log(`${tueur.nom} le tueur a tué tout le monde en ${tour} tours. Il lui reste ${tueur.hp} points de vie.`);
}

if (tueur.hp <= 0 && survivants.length > 0) {
    console.log(`Le tueur est mort. Les survivants ont gagné en ${tour} tours.`);
    console.log("");
    console.log("Les survivants en vie sont :");
    survivants.forEach(survivant => {
        console.log(`-- ${survivant.nom}, ${survivant.caractere}`);
    });
    console.log("");
    console.log("Les survivants morts sont :");
    survivantsMorts.forEach(survivant => {
        console.log(`-- ${survivant.nom}, ${survivant.caractere}`);
    });
}

if (tueur.hp <= 0 && survivants.length == 0) {
    console.log("Tout le monde est mort.");
}