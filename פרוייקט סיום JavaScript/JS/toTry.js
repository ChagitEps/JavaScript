let shoes =[
    
    {img:"../IMG/מחשב1.jpg",name:"Lenovo",cost:2000 ,catagory:"hgyuj",color:"Blak"},
    {img:"../IMG/מחשב2.jpeg",name:"Dell",cost:1500 ,catagory:"hgyuj",color:"Grey"},
    {img:"../IMG/מחשב3.jpg",name:"Asus",cost:3000 ,catagory:"hgyuj",color:"Blak"},
    {img:"../IMG/מחשב4.jpg",name:"Dell",cost:1790 ,catagory:"hgyuj",color:"Grey"},
    {img:"../IMG/מחשב5.jpg",name:"Lenovo",cost:2000 ,catagory:"hgyuj",color:"Grey"}]
   
   
  
    
    
  
    function toShowProdact(){
    
        let hello=document.querySelector('#hello')
        let ll=document.createElement('label')
        hello.appendChild(ll)
        ll.innerHTML=sessionStorage.getItem("user")+" שלום ל"
    //נתפוס את הדיב עליו יוצגו כל המוצרים
    let d=document.getElementById('allP')
        for(let index=0; index<shoes.length; index++)
    {
        let s=document.createElement('div')
        s.className='divs'
    //נוסיף את המוצר הנוכחי לדיב הכללי
    d.appendChild(s)
    
    let pic=document.createElement('img')
    pic.src=shoes[index].img
    s.appendChild(pic)
    pic.className='picc'

    let br=document.createElement('br')
    s.appendChild(br)
    
    let sname =document.createElement('lable')
    sname.innerHTML =shoes[index].name
    s.appendChild(sname)
    sname.className='sname'
    let b=document.createElement('br')
    s.appendChild(b)
    
    let scost =document.createElement('lable')
    scost.innerHTML =shoes[index].cost + '$'
    s.appendChild(scost)
    
    let brr=document.createElement('br')
    s.appendChild(brr)

    let btn=document.createElement('button')
    btn.innerHTML="לפרטים "
    s.appendChild(btn)
    btn.className='addToCart'

    let adcart=document.createElement('button')
    adcart.innerHTML="הוסף לסל"
    s.appendChild(adcart)
    adcart.className='addToCart'

    btn.addEventListener('click',details.bind(null,shoes[index]))
    adcart.addEventListener('click',addToCart.bind(null,shoes[index]))

    }
    }
    
    
    function details(s){
    //המרת האובייקט לJSON
    // let dtls= JSON.parse(localStorage.getItem(s.catagory))
    
    //שמירת אוביקט הJSON בSTORAGE
    sessionStorage.setItem('product_details',JSON.stringify(s))
    //העברה לדף אחר
    window.location.href='../HTML/pagepic.html'
    }



    let update =()=>{}

  