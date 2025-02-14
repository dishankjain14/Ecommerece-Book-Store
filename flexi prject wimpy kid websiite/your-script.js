// Initialize the cart array or retrieve from Local Storage
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(productName, price) {
    var product = {
        name: productName,
        price: price
    };
    cart.push(product); // Add the product to the cart array

    // Store the cart data in Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart modal with the new item
    displayCartItems();
}

// Function to display cart items in the modal
function displayCartItems() {
    var cartItemsList = document.getElementById('cart-items-list');
    var cartTotalAmount = document.getElementById('cart-total-amount');
    var clearCartButton = document.getElementById('clear-cart-btn');

    if (cart.length > 0) {
        cartItemsList.innerHTML = ''; // Clear previous items

        var totalPrice = 0;

        cart.forEach(function (item) {
            var listItem = document.createElement('li');
            listItem.textContent = item.name + ' - $' + item.price.toFixed(2);
            cartItemsList.appendChild(listItem);
            totalPrice += item.price;
        });

        cartTotalAmount.textContent = totalPrice.toFixed(2);

        // Show the "Clear Cart" button if there are items in the cart
        clearCartButton.style.display = 'block';
    } else {
        cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
        cartTotalAmount.textContent = '0.00';

        // Hide the "Clear Cart" button if the cart is empty
        clearCartButton.style.display = 'none';
    }
}

// Function to clear the cart
function clearCart() {
    cart = []; // Remove all items from the cart array

    // Store the empty cart data in Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart modal to reflect the empty cart
    displayCartItems();
}

// Function to open the cart modal
function openCart() {
    var cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';

    // Display cart items
    displayCartItems();
}

// Call the openCart function when clicking the cart icon
document.querySelector('.cart-icon').addEventListener('click', openCart);

// Initial display of cart items when the page loads
displayCartItems();
// Initialize the cart array or retrieve from Local Storage
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(productName, price) {
    var product = {
        name: productName,
        price: price
    };
    cart.push(product); // Add the product to the cart array

    // Store the cart data in Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart modal with the new item
    displayCartItems();
}


const form = document.getElementById('cart')
form.addEventListener('click', orderplace)

async function orderplace(event) {
    event.preventDefault()
    var cartItemsList = document.getElementById('cart-items-list');
    var cartTotalAmount = document.getElementById('cart-total-amount');
    var clearCartButton = document.getElementById('clear-cart-btn');


 const result =  await fetch('http://localhost:9999/api/checkout',{
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
    },
    body: JSON.stringify({
        cartitemslist,
        carttotalamount,
        clearcartbutton
    })
    }).then((res) => res.json())
}
