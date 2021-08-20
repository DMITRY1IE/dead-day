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
        var month_1 = document.getElementById('month_1').value;
        var day_1 = document.getElementById('day_1').value;
        let year_3 = 2021 - year_2;
        let day_sr = (day_1 == "0")
        let month_sr = (month_1 == "0")
        let year_sr = (year_2 == "0")
        console.log(day_sr, month_sr, year_sr)
        // -----------------------------
        if (day_sr == true) {
            const day_1_1 = document.getElementById('day_1')
            day_1_1.classList.add('border-color')
        } else if (day_sr == false) {
            const day_1_1 = document.getElementById('day_1')
            day_1_1.classList.remove('border-color')
            // console.log('remove')
        };
        // -----------------------
        if (month_sr == true) {
            const month_1_1 = document.getElementById('month_1')
            month_1_1.classList.add('border-color')
        } else if (month_sr == false) {
            const month_1_1 = document.getElementById('month_1')
            month_1_1.classList.remove('border-color')
            // console.log('remove2')
        };
        // --------------------
        if (year_sr == true) {
            const year_1_1 = document.getElementById('year')
            year_1_1.classList.add('border-color')
        } else if (year_sr == false) {
            const year_1_1 = document.getElementById('year')
            year_1_1.classList.remove('border-color')
        }
        // ---------------------------------------
        if (year_3 >= 18, year_3 <= 35) {
            const window_36_45 = document.getElementById('window_36_45');
            const window_46 = document.getElementById('window_46');
            window_36_45.classList.add('none')
            window_46.classList.add('none')
        } else if (year_3 >= 36, year_3 <= 45) {
            // console.log('от 36 до 45')
            const window_36_45 = document.getElementById('window_36_45');
            window_36_45.classList.toggle('none')
        } else if (year_3 >= 46) {
            // console.log('от 46')
            const window_46 = document.getElementById('window_46');
            window_46.classList.toggle('none')
        } else if (year_3 > 18) {
            console.log('меньше 18 лет')
        };
        // ---------------------------
        if (day_sr == true, month_sr == true, year_sr === true) {
            console.log('Error')
        } else if (day_sr == false) {
            if (year_sr === false) {
                if (month_sr == false) {
                    const elem_1 = document.getElementById('elem');
                    const main_3 = document.getElementById('main-3');
                    const index_2 = document.getElementById('index-2');
                    const index_4 = document.getElementById('index-4');
                    main_3.classList.remove('none')
                    index_2.classList.add('none')
                    setTimeout(function () {
                        main_3.classList.add('none')
                        index_4.classList.remove('none')
                    }, 2000);
                    console.log('all-good')
                }
            }
        }

    };
});


