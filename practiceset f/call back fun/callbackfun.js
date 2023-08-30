function modifyarray(arr,callback) {

    arr.push(100)

    callback();
    
}

const arr=[34,45,3,4]

modifyarray(arr, function(){
    console.log(arr)
})