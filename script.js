document.getElementById('8gb-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
});
document.getElementById('16gb-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
});



document.getElementById('256gb-ssd-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('storage-cost');
    memoryCost.innerText = 0;
});
document.getElementById('512gb-ssd-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('storage-cost');
    memoryCost.innerText = 100;
});
document.getElementById('1tb-ssd-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('storage-cost');
    memoryCost.innerText = 180;
});



document.getElementById('free-delivery-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('delivery-cost');
    memoryCost.innerText = 0;
});
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('delivery-cost');
    memoryCost.innerText = 20;
});
