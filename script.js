function getInputValue(options) {
    const inputId = document.getElementById(options);
    const inputValue = inputId.innerText;
    const inputCost = parseInt(inputValue);
    return inputCost;
};
function addInputValues(button, calc, cost) {
    document.getElementById(button).addEventListener('click', function () {
        const calcValue = document.getElementById(calc);
        calcValue.innerText = cost;
        const basePrice = getInputValue('best-price');
        const memoryCost = getInputValue('memory-cost');
        const storageCost = getInputValue('storage-cost');
        const deliveryCost = getInputValue('delivery-cost');
        const totalPrice = document.getElementById('total-price')
        const total = document.getElementById('total')
        totalPrice.innerText = basePrice + memoryCost + storageCost + deliveryCost;
        total.innerText = totalPrice.innerText;
    });
}
const memoryCostFor8gb = 0;
const memoryCostFor16gb = 180;
const storageCostFor256gb = 0;
const storageCostFor512gb = 100;
const storageCostFor1tb = 180;
const freeDeliveryCost = 0;
const paidDeliveryCost = 20;
addInputValues('8gb-btn', 'memory-cost', memoryCostFor8gb);
addInputValues('16gb-btn', 'memory-cost', memoryCostFor16gb);
addInputValues('256gb-ssd-btn', 'storage-cost', storageCostFor256gb);
addInputValues('512gb-ssd-btn', 'storage-cost', storageCostFor512gb);
addInputValues('1tb-ssd-btn', 'storage-cost', storageCostFor1tb);
addInputValues('free-delivery-btn', 'delivery-cost', freeDeliveryCost);
addInputValues('paid-delivery-btn', 'delivery-cost', paidDeliveryCost);
//set coupon code and give conditions for getting discount
document.getElementById('apply-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input-field').value;
    if (inputValue == 'stevekaku') {
        const totalValue = document.getElementById('total');
        const totalNum = totalValue.innerText;
        totalValue.innerText = totalNum - (totalNum * 0.2);
        // if (totalValue.innerText <= 1299) {
        //     document.getElementById('apply-btn').disabled = true;
        // }
    }
    document.getElementById('input-field').value = '';
})