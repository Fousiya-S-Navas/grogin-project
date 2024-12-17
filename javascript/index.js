// fetch json file product mapping

const productlist = document.getElementById("product_list");
const searchInput = document.getElementById("searchInput");

let products = [];  


function renderProductList(filteredProducts) {
    productlist.innerHTML = "";  

    
    filteredProducts.forEach(product => {
        const listitem = document.createElement("li");

        
        listitem.innerHTML = `
            <div class="product_top">
                <div class="top">
                    <span class="offer">${product.offer}%</span>
                    <img src="images/Vector (8).svg" alt="offer"/>
                </div>
                <img src="${product.image}" alt="${product.name}" class="product-image"/>
                <div class="select">
                    <span class="organic">
                        <img src="images/organic.svg" alt="organic"/>
                        ORGANIC
                    </span>
                    <img src="images/dot2.png" alt="dot2" class="dot">
                </div>
            </div>
            <div class="product_bottom">
                <p>${product.name}</p>
                <span class="rating">
                    <img src="${product.star}" alt="rating star"/>
                    <small>${product.rating}</small>
                </span>
                <span class="price">
                    <h3>$${product.price}</h3>
                    <del>$${product.deleted_price}</del>
                </span>
                <span class="stock">
                    <span class="cart"><img src="images/cart white.svg" alt="cart"/></span>
                    <small class="instock">IN STOCK</small>
                </span>
            </div>`;

        productlist.appendChild(listitem);  
    });
}


searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.toLowerCase(); 

   
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery);  
    });

    renderProductList(filteredProducts);  
});


window.addEventListener("load", function () {
    fetch('javascript/product.json')  
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error in network response');
            }
            return response.json();
        })
        .then((data) => {
            products = data.products;  
            renderProductList(products);
        })
        .catch((error) => {
            console.log("Error:", error);  
        });
});


// widget filter button responsive


document.querySelector('.toggle').addEventListener('click', function() {
    var categories = document.getElementById('categories');
    if (categories.style.display === 'none' || categories.style.display === '') {
        categories.style.display = 'block';  // Show the categories
    } else {
        categories.style.display = 'none';   // Hide the categories
    }
});




// searchInput display 



document.getElementById('searchIcon').addEventListener('click', function() {
    var search = document.getElementById('searchInput');
    if (search.style.display === 'none' || search.style.display === '') {
        search.style.display = 'block';  // Show the input field
    } else {
        search.style.display = 'none';   // Hide the input field
    }
});




