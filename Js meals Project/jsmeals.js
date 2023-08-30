$.ajax({
    type:'get',
    url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success:function(responce)
    {
      for(let i=0;i<responce.meals.length;i++){
        let newitems = `<div class='col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center'>
        <p>
        ${responce.meals[i].strMeal} </p>
        <img src=${responce.meals[i].strMealThumb} class='img-fluid'/>
        <p> ${responce.meals[i].idMeal}</p>
         </div>`
     
      $(`#myitems`).append(newitems)
    }
    },
    error : function(error)
{
    console.log(error)
}
})
