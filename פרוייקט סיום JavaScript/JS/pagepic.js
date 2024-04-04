
function display1() {
    //let count =0
    let product = sessionStorage.getItem("product_details")
    // alert(catgrysh)

    catgrysh = JSON.parse(product)

    let s = document.getElementById('p')



    let nam = document.createElement('label')
    nam.innerHTML = catgrysh.name
    s.appendChild(nam)
    nam.className = 'nam'

    let br = document.createElement('br')
    s.appendChild(br)


    let br2 = document.createElement('br')
    s.appendChild(br2)

    let prc = document.createElement('label')
    prc.innerHTML = "price:" + catgrysh.cost
    s.appendChild(prc)
    prc.className = 'dt'

    let br3 = document.createElement('br')
    s.appendChild(br3)


    let clr = document.createElement('label')
    clr.innerHTML = "color:" + catgrysh.color
    s.appendChild(clr)
    clr.className = 'dt'

    let br4 = document.createElement('br')
    s.appendChild(br4)

    let pc = document.createElement('img')
    pc.src = catgrysh.img
    s.appendChild(pc)
    pc.className = 'img'

    br4 = document.createElement('br')
    s.appendChild(br4)


    let ip = document.createElement('button')
    ip.innerHTML = "הוסף לסל"
    s.appendChild(ip)
    ip.addEventListener('click', addToCart.bind(null, catgrysh))

    let lbl = document.createElement('label')
    lbl.className = 'cls'
    lbl.innerHTML = localStorage.getItem(catgrysh.name)
    s.appendChild(lbl)

    
}
// function bay(name) {
//     // let p=document.createElement('label')
//     let count = +(localStorage.getItem(name))

//     let l = localStorage.setItem(name, count + 1)
//     let lbl = document.getElementsByClassName('cls')
//     lbl.innerHTML = localStorage.getItem(name)
//     //    s.appendChild(lbl)
// }

// function baym(name) {
//     let count = +(localStorage.getItem(name))
//     if (count > 0) {
//         let m = localStorage.setItem(name, count - 1)
//         let lbl = document.getElementsByClassName('cls')
//         lbl.innerHTML = localStorage.getItem(name)
//         //    s.appendChild(lbl)
//     }
// }

