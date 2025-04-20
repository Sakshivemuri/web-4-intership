const products = [
  { name: "Smartphone", category: "electronics", price: 300 },
  { name: "Jeans", category: "clothing", price: 50 },
  { name: "Laptop", category: "electronics", price: 800 },
  { name: "T-shirt", category: "clothing", price: 20 },
];

function renderProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;
  
  let filtered = products.filter(p => category === "all" || p.category === category);
  
  filtered.sort((a, b) => sort === "low" ? a.price - b.price : b.price - a.price);

  const container = document.getElementById("productList");
  container.innerHTML = "";

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${p.name}</strong> - $${p.price}`;
    container.appendChild(div);
  });
}

renderProducts();
