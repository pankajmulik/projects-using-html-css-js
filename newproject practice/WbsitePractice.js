let sidebarStatus=0
function open_setting(){
    if(!sidebarStatus){
    $('.sidepanel').css('width','100px')
    $('li').css('display','block')
    sidebarStatus=1
}
else{
    $('.sidepanel').css('width','0')
    $('li').css('display','none')
    sidebarStatus=0
}
}
let loginform=0

function submitsign(){
    if(!loginform){
        
    }
    let userName=document.getElementById('userName').value
    checkusername(userName)
}
function checkusername(userName)
{
    if(userName.length>4){
document.getElementById('userName').classList.add('success')
document.getElementById('userName').classList.replace('error', 'success')
document.getElementById('username_error').innerText=''
    }
    else{
        document.getElementById('userName').classList.replace('success','error')
document.getElementById('username_error').innerText='username must contain 6 characters'
    
    }
}
