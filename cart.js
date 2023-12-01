function displayCart() {
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};

  let cartItems = document.getElementById('shopping_cart_content');
  let NoItems = document.getElementById('Empty_cart_div');

  cartItems.innerHTML = '';

  if (Object.keys(cart) !== 0){
  for (let item in cart) {

    let cartItem = document.createElement('div');
      cartItem.classList.add('shpping_cart_div')
      // cartItem.innerHTML = `<h2>Product: ${item}, Quantity: ${cart[item].quantity}, Price: ${cart[item].price}</2>`;
        cartItem.innerHTML = `
        <div class="every_product">
          <div class="cart_desc_div">
            <div class="every_product_image">
              <img src="${cart[item].image}">
            </div>
            <div class="cart_product_details">
              <h2 class="cart_product_heading">${item}</h2>
              <p class="cart_product_category">Category:</p>
              <p class="cart_product_stock">In Stock</p>
              <p class="cart_product_shipping">Eligible for FREE Shipping</p>
              <span class="cart_product_update_qty">Qty: + <span class="every_prodcut_qty">${cart[item].quantity}</span> - </span>
              <button id="cart_product_delete" onclick ="deleteItem('${item}')">Delete</button>
            </div>
            <div class="cart_product_price">
              <p class="best_deals_tag"> BEST DEAL </p>
              <p class="Sproduct_price"> ${cart[item].price}</p>
            </div>
          </div>
        </div>`
        cartItems.appendChild(cartItem)
      }
  }
  if (Object.keys(cart) == 0){
    NoItems.innerHTML = `
        <div id="Empty_cart">
              <p>
                  Your Cart is <span>EMPTY</span>
              </p>
              <button><a href="/index.html">Back To Home</a></button>
        </div>
    `;
  }
};

function deleteItem(productName_){

  let cart = JSON.parse(localStorage.getItem(`cart`));

  if (cart.hasOwnProperty(productName_)) {
    delete cart[productName_];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    subtotal();
    updateCartCount();
  } else {
      console.error('Item not found in cart.');
  }
};


displayCart();

function updateCartCount(){
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};

  let totalCount = 0;

  for (let item in cart) {
      totalCount += cart[item].quantity;
  }
    document.querySelector('.cart_count').textContent = totalCount;
  }

updateCartCount();

function subtotal(){
  let cart = localStorage.getItem(`cart`) ? JSON.parse(localStorage.getItem('cart')) : {};

  let ProductAmount = 0;

  for ( let x in cart){
    ProductAmount += cart[x].quantity * (parseFloat(cart[x].price.replace('$', '')));
  }

  document.getElementById('cart_product_price_total_').innerText = `$${ProductAmount}`;
  document.getElementById('cart_product_price_total-').innerText = `$${ProductAmount}`;

}

subtotal();



