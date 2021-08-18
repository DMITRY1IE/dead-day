// for (let year = 1920; year <= 2021; year++) {
//     let options = document.createElement("OPTION");
//     options.classList.toggle('years');
//     let years = document.querySelectorAll('years');
//     options.classList.toggle(year);
//     console.log(options.className)
//     document.getElementById("year").appendChild(options).innerHTML = year;
// };
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("elem").onclick = function () {
        event.preventDefault();
        var year_2 = document.getElementById("year").value;
        let year_3 = 2021 - year_2;
        console.log(year_2)

        console.log(year_3)
        if (year_3 >= 18, year_3 <= 35) {
            const window_36_45 = document.getElementById('window_36_45');
            const window_46 = document.getElementById('window_46');
            window_36_45.classList.add('none')
            window_46.classList.add('none')
        } else
            if (year_3 >= 36, year_3 <= 45) {
                // console.log('от 36 до 45')
                const window_36_45 = document.getElementById('window_36_45');
                window_36_45.classList.toggle('none')
            } else
                if (year_3 > 46) {
                    // console.log('от 46')
                    const window_46 = document.getElementById('window_46');
                    window_46.classList.toggle('none')
                }

    };
});
// ======================================================
const elem_1 = document.getElementById('elem');
const main_3 = document.getElementById('main-3');
const index_2 = document.getElementById('index-2');
const index_4 = document.getElementById('index-4');

elem_1.addEventListener("click", () => {
    main_3.classList.remove('none')
    index_2.classList.add('none')
    setTimeout(function () {
        main_3.classList.add('none')
        index_4.classList.remove('none')
    }, 2000);
})




