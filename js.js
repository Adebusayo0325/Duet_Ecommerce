let productsHandle = document.getElementById("products")
let dealsHandle = document.getElementById("deal-slide")
let clothes = document.getElementById("clothes")
let jay = document.getElementById("jay")
let ct = document.getElementById("ct")
let electronicss = document.getElementById("electronics")
let others = document.getElementById("others")
let filterAll = document.getElementById("filter-all")
  let obj = fetch('https://api.escuelajs.co/api/v1/products')
  .then( response => response.json())
  .then(results =>{ 
    let product =''
    let deal = ''
    console.log(results[0]);
    for (const products of results) {
      product += `
      <div class="product">
          <div class="product-svgs">
            <svg class="product-svg svg-cart" id="svg-cart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"/></svg>
            <svg class="product-svg svg-heart" id="svg-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"/></svg>
          </div>
          <div class="product-img-ctrl">
            <img class="product-img" src="${products.images[0]}" alt="">
          </div>
          <p class="product-brand">${products.category.name}</p>
          <p class="product-name" >${products.title}</p>
          <p class="product-price">$${products.price}</p>
      </div>` 
    }
    productsHandle.innerHTML = product
    for (const products of results.splice(0,4)) {
      deal +=`
      <div class=" deal deal-1">
        <img class="deal-img" src="${products.images[0]}" alt="">
        <p class="deal-item-name">${products.title}</p>
        <p class="deal-price">$${products.price}</p>
    </div>`
    }
    dealsHandle.innerHTML = deal
  })    
