function wrongPassword(input) {
    let password = input[0]
    let result = password === "s3cr3t!P@ssw0rd"

    if (result) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
wrongPassword(["password"])
