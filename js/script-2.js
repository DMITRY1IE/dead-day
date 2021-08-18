document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    loader.classList.toggle('load-end');
    console.log('end');
});

function counter(ms, className) {
    let counter = 0;
    let interval = setInterval(() => {
        document.getElementById('percentages').innerHTML = ++counter;
        counter === 100 ? clearInterval(interval) : false;
    }, ms)
}
counter(100, '.res')

let now = new Date();
const date = document.getElementById('date').innerHTML = (now.getDate() + 1);
const month = document.getElementById('month').innerHTML = (now.getMonth() + 1);
