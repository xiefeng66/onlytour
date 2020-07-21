$.ajax({
    url:"header.html",
    type:"get",
    success:function(result){
        console.log(result);
        $(result).replaceAll("#div")
    }
})