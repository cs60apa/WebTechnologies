let cart = [];
let totalPrice = 0;

document.getElementById('add-to-cart').addEventListener('click', function() {
    const productName = document.querySelector('.product-details h1').textContent;
    const productPrice = parseFloat(document.querySelector('.price').textContent.replace('$', ''));
    
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length > 0) {
        alert(`Checkout successful! Total: $${totalPrice.toFixed(2)}`);
        cart = [];
        totalPrice = 0;
        updateCart();
    } else {
        alert('Your cart is empty!');
    }
});

function changeImage(src) {
    document.getElementById('main-image').src = src;
}
