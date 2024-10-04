// Get the modal, button, and close elements
const modal = document.getElementById('orderModal');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const closeBtn = document.querySelector('.close-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const modalProductImg = document.getElementById('modalProductImg');

// Open modal when any "Add to Cart" button is clicked
addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        const productImageUrl = card.getAttribute('data-image-url');
        modalProductImg.src = productImageUrl;  // Update the modal image
        modal.style.display = 'flex';

        // Reset the form
        document.getElementById('orderForm').reset();
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when cancel button is clicked
cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;

    // WhatsApp API
    const message = `Order Details:\nName: ${name}\nPhone: ${phone}\nCity: ${city}\nAddress: ${address}\nQuantity: ${quantity}\nProduct Image: ${modalProductImg.src}`;
    window.location.href = `https://wa.me/03148512768?text=${encodeURIComponent(message)}`;
    
    // Close modal after sending the order
    modal.style.display = 'none';
});
