function pcGameShop(input) {

    let index = 0;
    let soldGames = input[index];
    index++;

    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= soldGames; i++) {
        let name = input[i];
        if (name === "Hearthstone") {
            hearthstone += 100 / soldGames;
        } else if (name === "Fornite") {
            fornite += 100 / soldGames;
        } else if (name === "Overwatch") {
            overwatch += 100 / soldGames;
        } else {
            others += 100 / soldGames
        }
    }

    console.log(`Hearthstone - ${hearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${fornite.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatch.toFixed(2)}%`);
    console.log(`Others - ${others.toFixed(2)}%`);
}
pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])