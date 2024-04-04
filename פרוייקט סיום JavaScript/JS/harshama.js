f1 = () => {
    let allD=document.getElementsByTagName('input')
    let newUser={
        email: allD[0].value,
        password: allD[1].value,
        name:allD[2].value,
        phone:allD[3].value,
        address: allD[4].value
    }
    if(newUser.email==""||newUser.password==""||newUser.name==""||newUser.phone==""||newUser.address=="")
    {
        alert("אחד או יותר מהפרטים חסרים")
    }
    else
    {
        localStorage.setItem(newUser.password,JSON.stringify(newUser))
        sessionStorage.setItem('user',newUser.name)
        alert("הפרטים שלך נשמרו בהצלחה!")
        
        window.location="../HTML/PageHom.html"
    }

}