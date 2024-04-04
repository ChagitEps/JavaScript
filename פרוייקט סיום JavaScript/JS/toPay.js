 function pay()
 {
    let p=document.querySelector("#p")
let l=document.createElement('label')
p.appendChild(l)
l.style.color="rgb(37, 160, 12)"
l.style.fontSize="20px"
    l.innerHTML= sessionStorage.getItem("sof")

 }
function f1()
{


        
        alert("התשלום בוצע בהצלחה!")



}