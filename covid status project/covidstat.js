$.ajax({

    type: 'get',
   url:'https://api.covid19api.com/summary',
    success: function(responce){
        console.log(responce.Countries)
        for(let i=0;i<responce.Countries.length;i++){
            let totalactive=responce.Countries[i].TotalConfirmed-responce.Countries[i].TotalRecovered
            let tablerow=`<tr><td>+${responce.Countries[i].Country} </td><td>${responce.Countries[i].TotalConfirmed}</td><td>${totalactive}</td><td>${responce.Countries[i].TotalRecovered}</td> <td>${responce.Countries[i].TotalDeaths}</td>  </tr>`
        $('#tbody').append(tablerow)
        }
        $('#covidtable').DataTable()
    },
    error : function(error)
    {
        console.log(error)
    }
})