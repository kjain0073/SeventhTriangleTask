$(".minus").click(function(){
    var id = $(this).attr('data-id');
    var qty = $("#qty"+id).val();
		if(qty >0){
       qty--;
       $("#qty"+id).val(qty);
        var getPrice = $("#price"+id).val();
        getPrice = parseFloat(getPrice).toFixed(2);
        var totalAmt = getPrice*qty;
        $("#total"+id).text(totalAmt);
    }
});
$(".plus").click(function(){
		var id = $(this).attr('data-id');
    var qty = $("#qty"+id).val();
    qty++;
    $("#qty"+id).val(qty);
    var getPrice = $("#price"+id).val();
    getPrice = parseFloat(getPrice).toFixed(2);
    var totalAmt = getPrice*qty;
    $("#total"+id).text(totalAmt);
    
});