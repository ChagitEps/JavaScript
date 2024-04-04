


let ar = ['../IMG/g.jpg', '../IMG/הגנה.jpg', '../IMG/צילום מסך 2023-07-16 185513.jpg']

let counter = -1

let arrpic=['../IMG/מחשב1.jpg','../IMG/מחשב1.jpg','../IMG/מחשב5.jpg','../IMG/מחשב3.jpg','../IMG/מחשב4.jpg']

function addpic() {

  // setInterval(() => {
  //   console.log(counter)
  //   counter++
  //   if (counter == ar.length)
  //     counter = 0

  //   let impRashi = document.querySelector("#impRashi").src = ar[counter]
  // }, 5000)

  let sh = document.querySelector('#sh')
  for (let index = 0; index < arrpic.length; index++) {
    let shh = document.createElement('div')
    let btn=document.createElement('button')
    btn.innerHTML="הוסף לסל"
    shh.className = 'divs'
    sh.appendChild(shh)
    let ing=shh.style.backgroundImage ='url('+arrpic[index]+')'
    shh.addEventListener('click', abc)
    btn.className='addToCart'
    shh.appendChild(btn)
    
   // btn.addEventListener('click',addtocart())
  }



  //////////////
  // let drs = document.querySelector('#drs')
  // for (let index = 0; index < 4; index++) {
  //   let drse = document.createElement('div')
  //   drse.className = 'divs'
  //   drs.appendChild(drse)
    
  // }
}
// function addtocart()
// {

// }
function abc()
 { 
  window.location = "../HTML/pagepic.html" 
  

}

