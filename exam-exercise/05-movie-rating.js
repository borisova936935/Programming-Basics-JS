function movieRating(input) {

    let index = 0;
    let moviesCount = Number(input[index]);
    index++;

    let highestRating = Number.MIN_VALUE;
    let highestName = "";
    let lowestRating = Number.MAX_VALUE;
    let lowestName = "";

    let averageRating = 0;

    for (let i = 1; i <= moviesCount; i++) {
        let name = input[index];
        index++;
        let rating = Number(input[index]);
        index++;

        averageRating += rating;
        if (rating > highestRating) {
            highestRating = rating;
            highestName = name;
        }
        if (rating < lowestRating) {
            lowestRating = rating;
            lowestName = name;
        }
       
    }

    console.log(`${highestName} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(averageRating / moviesCount).toFixed(1)}`);

}
movieRating(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"])