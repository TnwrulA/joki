
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


let order = [];
let totalPrice = 0;

function addToOrder(item, price) {
    order.push({ name: item, price });
    totalPrice += price;
    displayOrder();
}

function displayOrder() {
    const orderList = document.getElementById("orderList");
    const totalPriceElement = document.getElementById("totalPrice");
    
    orderList.innerHTML = '';
    order.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp ${item.price}`;
        orderList.appendChild(li);
    });
    
    totalPriceElement.textContent = `Total: Rp ${totalPrice}`;
}

function checkout() {
    const payment = parseFloat(document.getElementById("payment").value);
    if (isNaN(payment) || payment < totalPrice) {
        alert("Uang tidak cukup!");
        return;
    }
    
    const change = payment - totalPrice;
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.textContent = `Terima kasih atas pembelian Anda! Kembalian: Rp ${change}`;
    
    order = [];
    totalPrice = 0;
    displayOrder();
}
