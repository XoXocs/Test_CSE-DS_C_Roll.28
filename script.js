const pricePerUnit = 15;

function updateTotal() {
    const quantity = document.getElementById('quantity').value;
    const total = pricePerUnit * quantity;
    document.getElementById('total-price').textContent = `Total Price: Rs. ${total}`;
}

function buyNow() {
    const quantity = document.getElementById('quantity').value;
    const total = pricePerUnit * quantity;
    alert(`You added ${quantity} items to your cart for Rs. ${total}`);
}
