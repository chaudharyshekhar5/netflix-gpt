export const validation=(email,password)=>{
    const emailValidation=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const passwordValidation=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // const usernameValidation=/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/.test(username);

    if(!emailValidation){
        return "Sorry You Entered wrong Email address !!!"
    }
    if(!passwordValidation ){
        return "Sorry You Entered Wrong Password !!!"
    }
    // if(usernameValidation===false ){
    //     return(<h1>Sorry You Entered Wrong Username</h1>)
    // }
    return null
}