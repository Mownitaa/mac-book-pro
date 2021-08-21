// a parameter for getting common buttons 
function getOptionId(optionId) {
    const idValue = document.getElementById(optionId);
    const idInnerText = idValue.innerText;
    const costValue = parseInt(idInnerText);
    return costValue;
};
//setting the condition of adding total costs of selected options
function addCostValues(buttons, options, cost) {
    document.getElementById(buttons).addEventListener('click', function () {
        const optionsValue = document.getElementById(options);
        optionsValue.innerText = cost;
        //calling the common buttons by id
        const basePrice = getOptionId('best-price');
        const memoryCost = getOptionId('memory-cost');
        const storageCost = getOptionId('storage-cost');
        const deliveryCost = getOptionId('delivery-cost');
        const totalPrice = document.getElementById('total-price')
        const total = document.getElementById('total')
        //calculation for total costs
        totalPrice.innerText = basePrice + memoryCost + storageCost + deliveryCost;
        total.innerText = totalPrice.innerText;
    });
}
//setting the values for each buttons
const memoryCostFor8gb = 0;
const memoryCostFor16gb = 180;
const storageCostFor256gb = 0;
const storageCostFor512gb = 100;
const storageCostFor1tb = 180;
const freeDeliveryCost = 0;
const paidDeliveryCost = 20;

//calling a function to get the total addition of the selected options
addCostValues('8gb-btn', 'memory-cost', memoryCostFor8gb);
addCostValues('16gb-btn', 'memory-cost', memoryCostFor16gb);
addCostValues('256gb-ssd-btn', 'storage-cost', storageCostFor256gb);
addCostValues('512gb-ssd-btn', 'storage-cost', storageCostFor512gb);
addCostValues('1tb-ssd-btn', 'storage-cost', storageCostFor1tb);
addCostValues('free-delivery-btn', 'delivery-cost', freeDeliveryCost);
addCostValues('paid-delivery-btn', 'delivery-cost', paidDeliveryCost);

//setting coupon code and conditions for getting discount
document.getElementById('apply-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input-field').value;
    if (inputValue == 'stevekaku') {
        const totalValue = document.getElementById('total-price');
        const totalNum = totalValue.innerText;
        discountedPrice = document.getElementById('total');
        discountedPrice.innerText = totalNum - (totalNum * 0.2);
    }
    document.getElementById('input-field').value = '';
})