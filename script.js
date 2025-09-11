// Cart functionality
const cartItems = {
  banana: { name: 'Fresh Bananas', price: 299, qty: 1 },
  strawberry: { name: 'Organic Strawberries', price: 499, qty: 1 },
  mango: { name: 'Fresh Mangoes', price: 349, qty: 1 },
  apple: { name: 'Fresh Apples', price: 299, qty: 1 },
  watermelon: { name: 'Fresh Watermelon', price: 399, qty: 1 },
  orange: { name: 'Fresh Oranges', price: 249, qty: 1 }
};

function openCart() {
  document.getElementById('cartModal').classList.remove('hidden');
}

function closeCart() {
  document.getElementById('cartModal').classList.add('hidden');
}

function updateQuantity(item, change) {
  cartItems[item].qty = Math.max(1, cartItems[item].qty + change);
  document.getElementById(`${item}-qty`).textContent = cartItems[item].qty;
  
  const total = (cartItems[item].price * cartItems[item].qty);
  document.getElementById(`${item}-total`).textContent = `৳${total}`;
  
  updateCartTotals();
}

function removeItem(item) {
  if (confirm(`Remove ${cartItems[item].name} from cart?`)) {
    // In a real app, this would remove the item from the DOM
    alert(`${cartItems[item].name} removed from cart.`);
    updateCartTotals();
  }
}

function updateCartTotals() {
  let subtotal = 0;
  for (const item in cartItems) {
    subtotal += cartItems[item].price * cartItems[item].qty;
  }
  
  const shipping = 99;
  const total = subtotal + shipping;
  
  document.getElementById('subtotal').textContent = `৳${subtotal}`;
  document.getElementById('total').textContent = `৳${total}`;
}

function proceedToCheckout() {
  closeCart();
  document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.add('hidden');
}

function completeOrder() {
  closeCheckout();
  document.getElementById('successModal').classList.remove('hidden');
}

function closeSuccess() {
  document.getElementById('successModal').classList.add('hidden');
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Cart button click
  document.querySelector('.fa-shopping-cart').parentElement.addEventListener('click', openCart);
  
  // Navigation active state
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active-nav'));
      this.classList.add('active-nav');
    });
  });
});