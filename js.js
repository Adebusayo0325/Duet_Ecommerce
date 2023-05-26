let productsHandle = document.getElementById("products")
let productWidth = document.getElementsByClassName('product')[1].innerWidth 
let obj = fetch('https://fakestoreapi.com/products/')
.then( response => response.json())
.then(results =>{ 
  
  console.log(productWidth);
  let product =''
  for (const products of results) {
     product += `
      <div class="product">
          <div class="product-svgs">
            <svg class="product-svg svg-cart" id="svg-cart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"/></svg>
            <svg class="product-svg svg-heart" id="svg-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"/></svg>
            <svg class="product-svg svg-2arrow" id="svg-2arrow" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="M23.43 16.83A1 1 0 0 0 22 18.24L25.72 22H7.83a1 1 0 0 0 0 2h17.89L22 27.7a1 1 0 1 0 1.42 1.41L29.53 23Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M13.24 18.45a1 1 0 0 0 .71-1.71L10.24 13h17.88a1 1 0 0 0 0-2H10.24l3.71-3.73a1 1 0 0 0-1.42-1.41L6.42 12l6.11 6.14a1 1 0 0 0 .71.31Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
          </div>
          <img class="product-img" src="${products.image}" alt="">
          <p class="product-brand">Sony</p>
          <p class="product-name" >${products.title}</p>
          <p class="product-price">$${products.price}</p>
      </div>` 
    }
    console.log(results[1].title);
  // console.log(product);
  productsHandle.innerHTML = product
})
// style="width: ${productWidth-40}px"
let j = '7'
j += 4
console.log(j, typeof j);
// function toggle()