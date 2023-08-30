var mynavstatus=0;
function openNav(){
    if(!mynavstatus){
$('.maindiv').css('width','100%')
$('li').css('display','block')

    mynavstatus=1
    }
    else{
$('.maindiv').css('width','0')
$('li').css('display','none')
mynavstatus=0
    }
}