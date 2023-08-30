function validate(){
let username= document.getElementById('username').value 
let email=document.getElementById('email').value
let password=document.getElementById('password').value
let cpassword=document.getElementById('cpassword').value

checkusername(username)
checkemail(email)
checkpassword(password)
matchpassword(cpassword , password)

}

function checkusername(username){
    
    if(username.length>7){
        document.getElementById('username').classList.add('success')
document.getElementById('username').classList.replace('error','success')
document.getElementById('username_error').innerText=''
    }else{
        document.getElementById('username').classList.replace('success','error')
        document.getElementById('username_error').innerText='username contain min 8 characters'
    }
}
function checkemail(email){
    
    if(email.length>7 && email.includes('@') && email.includes('.com')){
        document.getElementById('email').classList.add('success')
document.getElementById('email').classList.replace('error','success')
document.getElementById('email_error').innerText=''
    }else{
        document.getElementById('email').classList.add('success','error')
        document.getElementById('email_error').innerText='email contain min 8 characters'
    }
}
function checkpassword(password) {
    
    if(password.length>7 && (password.includes('@') || password.includes('!')|| password.includes('#')|| password.includes('$'))){
        document.getElementById('password').classList.add('success')
document.getElementById('password').classList.replace('error','success')
document.getElementById('password_error').innerText=''
    }else{
        document.getElementById('password').classList.add('success','error')
        document.getElementById('password_error').innerText='password contain min 8 characters and must contain any special characters'
    }
}
function matchpassword(cpassword, password) {
    
    if(cpassword==password && password!=''){
        document.getElementById('cpassword').classList.add('success')
document.getElementById('cpassword').classList.replace('error','success')
document.getElementById('confirmpass_error').innerText=''
    }
    else
    {
        document.getElementById('cpassword').classList.add('success','error')
        document.getElementById('confirmpass_error').innerText='passwords do not match please retype password'
    }
}