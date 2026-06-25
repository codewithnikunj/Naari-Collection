
        // DOM Element Handlers
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const cartToggle = document.getElementById('cartToggle');
        const closeCart = document.getElementById('closeCart');
        const cartDrawer = document.getElementById('cartDrawer');
        const cartItemsContainer = document.getElementById('cartItems');
        const cartCountBadge = document.getElementById('cartCount');

        let cart = [];

        // Mobile responsive hamburger menu
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Sliding Cart interface actions
        cartToggle.addEventListener('click', () => {
            cartDrawer.classList.add('open');
        });

        closeCart.addEventListener('click', () => {
            cartDrawer.classList.remove('open');
        });

        // Add to Cart Functionality
        function addToCart(productName) {
            cart.push(productName);
            updateCartUI();
            
            // Automatically reveal cart drawer on adding item
            cartDrawer.classList.add('open');
        }

        // Render Updated Cart Items
        function updateCartUI() {
            // Update counter icon total
            cartCountBadge.textContent = cart.length;

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is currently empty.</p>';
                return;
            }

            // Populate side drawer elements
            cartItemsContainer.innerHTML = '';
            cart.forEach((item, index) => {
                const itemRow = document.createElement('div');
                itemRow.className = 'cart-item';
                itemRow.innerHTML = `
                    <span>${item}</span>
                    <i class="fa-solid fa-trash" style="color:#d9534f; cursor:pointer;" onclick="removeFromCart(${index})"></i>
                `;
                cartItemsContainer.appendChild(itemRow);
            });
        }

        // Remove item from Cart array
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        // Simple Checkout submission simulator
        function checkoutAlert() {
            if(cart.length === 0) {
                alert("Your shopping bag is empty!");
            } else {
                alert(`Thank you for choosing Naari Collection! Processing your order for ${cart.length} items.`);
                cart = [];
                updateCartUI();
                cartDrawer.classList.remove('open');
            }
        }