
// setting the value for each options of memory,storage and delivery process
function addZero(value) {
    const cost = document.getElementById(value + '-cost');
    cost.innerText = 0;
}
function add180(value) {
    const cost = document.getElementById(value + '-cost');
    cost.innerText = 180;
}
// function add(price) {
//     const addWithTotal = document.getElementById('total-price');
//     addWithTotal.innerText = 1299 + price;
// }
// function addTotal(num) {
//     const addWithTotalP = document.getElementById('total');
//     addWithTotalP.innerText = 1299 + num;
// }
document.getElementById('8gb-btn').addEventListener('click', function () {
    addZero('memory');
    // add(0);
    // addTotal(0);
});
document.getElementById('16gb-btn').addEventListener('click', function () {
    add180('memory');
    // add(180);
    // addTotal(180);
});
document.getElementById('256gb-ssd-btn').addEventListener('click', function () {
    addZero('storage');
    // add(0);
    // addTotal(0);
});
document.getElementById('512gb-ssd-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('storage-cost');
    memoryCost.innerText = 100;
    // add(100);
    // addTotal(100);
});
document.getElementById('1tb-ssd-btn').addEventListener('click', function () {
    add180('storage');
    // add(180);
    // addTotal(180);
});
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    addZero('delivery');
    // add(0);
    // addTotal(0);
});
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('delivery-cost');
    memoryCost.innerText = 20;
    // add(20);
    // addTotal(20);
});



document.getElementById('options').addEventListener('click', function (event) {
    // console.log('any key clicked');
    console.log(event.target.value);
    // const calcInput = document.getElementById('total-price');
    // const previousNum = calcInput.value;
    // const newNumber = 1299 + paeseInt(previousNum) + parseInt(option);
    // calcInput.value = newNumber;
})

// document.getElementById('apply-btn').addEventListener('click', function () {

    // const inputValue = document.getElementById('input-field').value;
    // console.log(inputValue);
    // // if (inputValue == 'stevekaku') {
    // //     const totalPriceValue = document.getElementById('total').innerText - 0.2;
    // //     return totalPriceValue;
    // // }
    // inputValue = '';
// })