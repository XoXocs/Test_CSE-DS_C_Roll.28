const priceElement = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

const price = parseFloat(priceElement.innerText);

quantityInput.addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) {
        totalPriceElement.innerText = '0.00';
    } else {
        const totalPrice = quantity * price;
        totalPriceElement.innerText = totalPrice.toFixed(2);
    }
}

function addToCart() {
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }

    const totalPrice = quantity * price;
    alert(`You added ${quantity} items to your cart for Rs.${totalPrice.toFixed(2)}`);
}
