const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const loader = document.getElementById("loader");

let debounceTimer;

// 🔥 Debounce Function
function debounce(func, delay) {
    return function (...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// 🔍 Search Function
function searchProducts() {
    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        resultsDiv.innerHTML = "";
        return;
    }

    loader.style.display = "block";

    fetch("products.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            loader.style.display = "none";

            const filtered = data.products.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );

            displayResults(filtered);
        })
        .catch(error => {
            loader.style.display = "none";
            resultsDiv.innerHTML = "<p style='color:red;'>Error fetching products</p>";
            console.error(error);
        });
}

// 🖥 Display Results
function displayResults(products) {

    resultsDiv.innerHTML = "";

    if (products.length === 0) {
        resultsDiv.innerHTML = "<p>No results found</p>";
        return;
    }

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h4>${product.name}</h4>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
        `;

        resultsDiv.appendChild(productDiv);
    });
}

// Attach Debounced Search
searchInput.addEventListener("input", debounce(searchProducts, 500));
