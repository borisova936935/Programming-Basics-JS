function building(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let i = x; i >= 1; i--) {
        let buff = "";

        for (let z = 0; z < y; z++) {
            if (i === x) {
                buff += "L" + i + z + " ";
            } else if (i % 2 === 0) {
                buff += "O" + i + z + " ";
            } else {
                buff += "A" + i + z + " ";
            }

        }
        console.log(buff);
    }

}
building(["6", "4"])