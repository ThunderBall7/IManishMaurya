
    // -----------------------------product.js----------------------
        const addToCartButton = document.getElementById('add_to_cart');
        const image = document.getElementById('product_image')

        addToCartButton.addEventListener('click', function(){
        const productName = document.querySelector('.product_head_desc').textContent;

        const price = document.querySelector('.price_of_product').textContent.split(':')[1].trim();

        const imageSrc = image.src;

        const Pid = Math.random().toString();

        // console.log(Pid);

        addToCart(productName, price, imageSrc, Pid);
        updateCartCount();

        });

    function addToCart(productName, price, imageSrc, Pid){

        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :
         [];

        if (cart[productName]){
            cart[productName].quantity += 1;
        } else {
            cart[productName] = {
                price: price,
                quantity: 1,
                image: imageSrc,
                id: Pid
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartCount(){
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};

        let totalCount = 0;

        for (let item in cart) {
            totalCount += cart[item].quantity;
        }

        document.querySelector('.cart_count').textContent = totalCount;
    }

        updateCartCount();

    // -----------------------------product.js----------------------
