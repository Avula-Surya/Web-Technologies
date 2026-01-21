// -------------------------------
// PRODUCT DATA
// -------------------------------
let products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Headphones", price: 1500, category: "Electronics" },
    { id: 3, name: "Shoes", price: 2000, category: "Fashion" },
    { id: 4, name: "T-Shirt", price: 600, category: "Fashion" }
];

let cart = [];
let appliedCoupon = "";

// Render Products
function displayProducts() {
    let output = "";
    products.forEach(p => {
        output += `
            <div class="product">
                <b>${p.name}</b> (₹${p.price})
                <button onclick="addToCart(${p.id})">Add</button>
            </div>
        `;
    });
    document.getElementById("productList").innerHTML = output;
}

// -------------------------------
// ADD TO CART
// -------------------------------
function addToCart(id) {
    let product = products.find(p => p.id === id);
    let item = cart.find(c => c.id === id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// -------------------------------
// REMOVE ITEM
// -------------------------------
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// -------------------------------
// UPDATE QUANTITY
// -------------------------------
function updateQty(id, qty) {
    let item = cart.find(i => i.id === id);
    item.quantity = Number(qty);
    updateCart();
}

// -------------------------------
// APPLY COUPON
// -------------------------------
function applyCoupon() {
    let code = document.getElementById("couponCode").value.trim().toUpperCase();
    let message = document.getElementById("couponMessage");

    // Validate coupon format
    if (!/^[A-Z0-9]{5,10}$/.test(code)) {
        message.style.color = "red";
        message.textContent = "Invalid coupon format!";
        return;
    }

    appliedCoupon = code;
    message.style.color = "green";
    message.textContent = "Coupon applied!";
    
    updateCart();
}

// -------------------------------
// DISCOUNT RULES
// -------------------------------
function applyDiscounts(subtotal) {
    let discount = 0;

    // 1. Bulk Discount: If quantity >= 3 for any item → 10% off that item
    cart.forEach(item => {
        if (item.quantity >= 3) {
            discount += item.price * item.quantity * 0.10;
        }
    });

    // 2. Category Discount: Electronics → extra 5% off
    cart.forEach(item => {
        if (item.category === "Electronics") {
            discount += item.price * item.quantity * 0.05;
        }
    });

    // 3. Time-based discount (Happy Hours: 6PM-8PM → 7% off)
    let hour = new Date().getHours();
    if (hour >= 18 && hour <= 20) {
        discount += subtotal * 0.07;
    }

    // 4. Coupon Rules
    if (appliedCoupon === "SAVE10") discount += subtotal * 0.10;
    if (appliedCoupon === "FASHION20") discount += subtotal * 0.20;
    if (appliedCoupon === "WELCOME5") discount += 5;

    return discount;
}

// -------------------------------
// UPDATE CART + RECALCULATE
// -------------------------------
function updateCart() {
    let output = "";
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        output += `
            <div class="cart-item">
                <b>${item.name}</b>
                <span>₹${item.price}</span>
                <input type="number" min="1" value="${item.quantity}"
                    onchange="updateQty(${item.id}, this.value)">
                <button class="remove" onclick="removeItem(${item.id})">X</button>
            </div>
        `;
    });

    document.getElementById("cartItems").innerHTML = output;

    // Apply all discount rules
    let discount = applyDiscounts(subtotal);

    // Update total
    let total = subtotal - discount;
    document.getElementById("totalAmount").textContent = total.toFixed(2);
}

// -------------------------------
displayProducts();
updateCart();
