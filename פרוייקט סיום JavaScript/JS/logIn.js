

f1 = () => {
    let allD=document.getElementsByTagName('input')
    let newUser={
        email: allD[0].value,
        password: allD[1].value,

    }
    if(localStorage.getItem(newUser.password)==null)
    {
        localStorage.setItem(newUser.password,newUser.password)
        window.location="./harshama.html"
    }
    else
    {
        let u=JSON.parse(localStorage.getItem(newUser.password))
      
        if(newUser.password==u.password)
        {
            // localStorage.setItem('curentUser',u.name)
            sessionStorage.setItem('user',newUser.email)
            window.location="../HTML/PageHom.html"
        }
        else
        {
            alert("error")
        }
    }
}


