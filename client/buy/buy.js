
var msg;
$(document).on('click','.drpdown_rent',function(){
	msg = "RENT";
});

$(document).on('click','.drpdown_buy',function(){
	msg = "BUY";
});


Template.search_ui.helpers({
	'buy_helper': function buy_helper_func() {
		//var msg = Session.get('msg');
		return msg;
		//return "BUY" ;
	}

});
Template.buy.helpers({
 
   'bannercontent':function(e){
    	return bannerdb.find({category:"BUY"},{sort:{uploadedAt:-1}});    	
    },
    
})