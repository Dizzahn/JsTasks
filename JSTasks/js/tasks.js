
// $(document).ready(function () {
//     $('button').click(function (event) {  // при нажатии на кнопку будет выполняться следующее действие
//         townsGet();

//     });
// });


// function townsGet() {
//     let input = document.querySelector('input');
//     let towns = [];
//     towns.push(input.value);
//     console.log(towns + '.');

// }

$(document).ready(function () {
    $('button').click(function (event) {  // при нажатии на кнопку будет выполняться следующее действие
        rounding();

    });
});

function rounding() {
    let input = document.querySelector('input');
    let answer = parseFloat(input.value).Math.toFixed(5);
    console.log(answer)


}

