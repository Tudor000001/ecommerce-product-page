let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let amount = document.getElementById("amount");
let addCart = document.getElementById("addCartButton");
let cartList = document.getElementById("cartList");
let amountStat = 1;
let amountVal = 0;
let price = 125;

plus.addEventListener('click', function () {
    amountStat = amountStat + 1;
    amount.innerHTML = amountStat;
});



minus.addEventListener('click', function () {
    if (amountStat > 1) {
        amountStat = amountStat - 1;
    }
    amount.innerHTML = amountStat;
});

addCart.addEventListener('click', function () {
    const parentElement = document.getElementById('cartElement');
    parentElement.innerHTML = '<div class="cartContent"><img id="cartContentImg" src="images/image-product-1-thumbnail.jpg"><br><p id="cartTextIn">Fall Limited Edition Sneakers</p><br><p id="priceCart">$125.00<p style="display:inline;"> x <p id="amountCart">&nbsp;1<p class="totalPriceTxt">&nbsp;$<p id="totalPrice" class="totalPriceTxt"></p><button id="delete"><img src="images/icon-delete.svg"></button><button id="checkout">Checkout</button></div>';
    let amountCart = document.getElementById("amountCart");
    let totalPrice = document.getElementById("totalPrice");
    let deleteCart = document.getElementById("delete");
    deleteCart.addEventListener('click', function () {
        amountVal = 0;
        parentElement.innerHTML = '<div id="cartContent">Your cart is empty</div>';
    });
    amountVal = amountVal + amountStat;
    amountCart.innerHTML = amountVal;
    totalPrice.innerHTML = price * amountVal;
});