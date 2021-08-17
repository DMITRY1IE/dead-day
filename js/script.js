for (let year = 1920; year <= 2021; year++) {
    let options = document.createElement("OPTION");
    document.getElementById("year").appendChild(options).innerHTML = year;
}