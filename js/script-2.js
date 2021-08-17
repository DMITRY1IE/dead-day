document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    loader.classList.toggle('load-end');
    console.log('end');
});

// let loader = document.getElementById('loader');
// window.onload = () => {
//     loader.classList.toggle = ('load-end');
//     console.log('load-end')
// }
// let myGreeting = setTimeout(function () {
//     alert('Hello, Mr. Universe!');
// }, 2000)

function counter(ms, className) {
    let counter = 0;
    let interval = setInterval(() => {
        document.getElementById('percentages').innerHTML = ++counter;
        counter === 100 ? clearInterval(interval) : false;
    }, ms)
}
counter(100, '.res')
