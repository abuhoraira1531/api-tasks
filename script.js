const productContainer = document.getElementById("products");
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products;
    products.map(
      (product) =>
        (productContainer.innerHTML += `<div class='product'>
         <img src=${product.thumbnail} alt="">
         <h4>${product.title}</h4>
         <p class='description'>${product.description}</p>
         <p>Price : ${product.price} $</p>
         </div>`)
      // console.log(product)
    );
  });
