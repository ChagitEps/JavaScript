let arrP = []

// cart = {
// product1 : {name: test},
// product2 : {name: test}
//}

// cart = [{}, {}, {}]

// 0.1 get cart from session storage

// 1. get product 

// 2. add product to cart

// 3. save to session storage

function addToCart(product) {
  product_saved = sessionStorage.getItem("catsheo") 
  arrP = product_saved == null? [] : JSON.parse(product_saved)

  const isExist = arrP.filter((prd) => {
    return prd.name == product.name
  })

  if (isExist.length > 0) {
    arrP.forEach((prd) => {
      if (prd.name === product.name) {
        prd.quantity++
      } 
    })
  } else {
    product.quantity = 1
    arrP.unshift(product)
  }

  sessionStorage.setItem("catsheo", JSON.stringify(arrP))
  // renderCart(arrP)
}

function getCart() {

  product_saved = sessionStorage.getItem("catsheo") || []
  arrP = product_saved.length == 0 ? [] : JSON.parse(product_saved)
  if (!Array.isArray(arrP)) {
    arrP = [arrP]
  }
  renderCart(arrP)
}
//localStorage.getItem(catgrysh.name)

function renderCart() {
let ad = document.getElementById("add")
ad.innerHTML ="תשלום סופי:"
  for (let i = 0; i < arrP.length; i++) {
    let a=document.createElement('div')
   a.className = 'add'
   ad.appendChild(a)
    let pic = document.createElement('img')
    pic.src = arrP[i].img
    a.appendChild(pic)
    pic.className = 'picc'

    let quantity = document.createElement('label')
    quantity.innerHTML = arrP[i].quantity
    a.appendChild(quantity)
    quantity.className = 'quantity'


    let sname = document.createElement('label')
    sname.innerHTML = arrP[i].name
    a.appendChild(sname)
    sname.className = 'sname'

    let scost = document.createElement('label')
    scost.innerHTML = arrP[i].cost
    a.appendChild(scost)

    let remove =  document.createElement('button')
    remove.innerHTML = 'remove'
    remove.id =  arrP[i].name
    a.appendChild(remove)
    remove.addEventListener('click', removeFromCart)


  }
  
    


  let pay=document.getElementById('pay')
  pay.innerHTML=""
  pay.className='pay'
  let toPay =  document.createElement('button')
  toPay.innerHTML = "לתשלום"
  pay.appendChild(toPay)
  toPay.addEventListener('click',()=>{ window.location="../HTML/toPay.html"})
  
  let total = document.createElement('label')
  total.innerHTML = calculateCart(arrP)
 
  pay.appendChild(total)

}

function calculateCart(cart){
  let total = 0
  cart.forEach((prd) => {
    price = prd.cost * prd.quantity
    total += price
  })
  let s=sessionStorage.setItem('sof',total)
 
  return total
}

function removeFromCart(e){
  product_saved = JSON.parse(sessionStorage.getItem("catsheo"))

  let cart = product_saved.filter((prd) => {
    return prd.name != e.target.id
  })

  sessionStorage.setItem("catsheo", JSON.stringify(cart))
  arrP=cart
  renderCart()

}

function reduceQuantityFromCart(product){
  product_saved = JSON.parse(sessionStorage.getItem("catsheo"))

  let cart = product_saved.forEach((prd) => {
    if( prd.name == product.name && product.quantity > 0){
      product.quantity--
    }
  })

  sessionStorage.setItem("catsheo", JSON.stringify(cart))
  renderCart(cart)

}

function addQuantityFromCart(product){
  product_saved = JSON.parse(sessionStorage.getItem("catsheo"))

  let cart = product_saved.forEach((prd) => {
    if( prd.name == product.name ){
      product.quantity++
    }
  })

  sessionStorage.setItem("catsheo", JSON.stringify(cart))
  renderCart(cart)

}