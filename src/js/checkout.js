import { getCart, clearCart } from './cart.js';

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Replace with your actual bot token
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID'; // Replace with your actual chat ID

export function initializeCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutForm = document.getElementById('checkoutForm');
    
    checkoutBtn.addEventListener('click', () => {
        document.getElementById('cartModal').style.display = 'none';
        checkoutModal.style.display = 'block';
    });
    
    checkoutForm.addEventListener('submit', handleCheckout);
}

async function handleCheckout(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        cart: getCart()
    };
    
    try {
        await sendOrderToTelegram(formData);
        alert('Order placed successfully! We will contact you soon.');
        clearCart();
        document.getElementById('checkoutModal').style.display = 'none';
        document.getElementById('checkoutForm').reset();
    } catch (error) {
        console.error('Error placing order:', error);
        alert('There was an error placing your order. Please try again.');
    }
}

async function sendOrderToTelegram(orderData) {
    const message = formatOrderMessage(orderData);
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to send message to Telegram');
        }
    } catch (error) {
        console.error('Telegram API Error:', error);
        throw error;
    }
}

function formatOrderMessage(orderData) {
    const cartItems = orderData.cart.map(item => 
        `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const total = orderData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return `
🛍 New Order!

👤 Customer Details:
Name: ${orderData.name}
Email: ${orderData.email}
Address: ${orderData.address}

🛒 Order Items:
${cartItems}

💰 Total: $${total.toFixed(2)}
    `.trim();
}