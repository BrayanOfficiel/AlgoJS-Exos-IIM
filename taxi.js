alert("EXO DU TAXI");

let titres = [
    "🚨 Anissa - Wejdene",
    "✅ Bande organisée - Jul",
    "✅ Deux Frères - PNL",
    "✅ STARGAZING - Travis Scott",
    "✅ Nasta Lautaan - NinjaBaka",
];

console.log("");

let nom = "Jordan";
let hp = 10;
let feux = 30;
let changements = 0;

for (titre in titres) {
    console.log(titres[titre]);
}

function titreRandom() {
    return Math.floor(Math.random() * titres.length);
}

while (feux > 0 && hp > 0) {
    feux -= 1;

    let actuel = titreRandom();
    console.log(`Prochain feu rouge: la musique jouée est ${titres[actuel]}. Il reste encore ${feux} feux rouges.`);

    if (actuel == 0) {
        hp -= 1;
        changements += 1;
        if (hp > 0) {
            console.log(`${nom} a perdu 1 neurone sur ${hp} et change de taxi.`);
        }
    }

    console.log("");
}

if (feux == 0 && hp > 0) {
    console.log(`✅ ${nom} est arrivé chez lui avec ${hp} neurones restants en changeant ${changements} fois de taxi ✅`);
}

if (hp == 0 && feux > 0) {
    console.log(`💥💥 ${nom} a perdu son dernier neurone et explose sur le coup. 💥💥`);
}

