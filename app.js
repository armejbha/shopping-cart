// casing part
function updateProductInput(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productInput.value = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productInput.value = parseInt(productNumber) - 1;
    }
    productNumber = productInput.value;
    let productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
// calculate total 
function calculateTotal() {
    const phonePrice = getInputValue('phone') * 1219;
    const casePrice = getInputValue('case') * 59;
    const subTotal = document.getElementById('sub-total').innerText = casePrice + phonePrice;
    const taxTotal = document.getElementById('tax-total').innerText = subTotal / 80;
    const totalPrice = document.getElementById('total-price').innerText = subTotal + taxTotal;
}
// increasing phone price 
document.getElementById('phone-plus').addEventListener('click',
    function () {

        updateProductInput('phone', 1219, true);
    })
// decreasing phone price 
document.getElementById('phone-minus').addEventListener('click',
    function () {
        updateProductInput('phone', 1219, false);
    })
// increasing case number 
document.getElementById('case-plus').addEventListener('click',
    function () {
        updateProductInput('case', 59, true);
    })
// decreasing case number 
document.getElementById('case-minus').addEventListener('click',
    function () {
        updateProductInput('case', 59, false);
    })